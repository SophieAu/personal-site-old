---
title: "Using the Google Sheets API to Save Event Signups"
date: 2020-11-28
updated: 2020-11-28
categories: javascript
slug: "google-sheets-api"
draft: false
---


## Prerequisites

* A [Netlify](https://www.netlify.com/) project. Any serverless provider works just as well but I've been using Netlify so that's what the tutorial will use.
* A [Google Docs Account](https://docs.google.com) for access to Google Sheets
* A [Sanity](https://www.sanity.io/) CMS in the backend. Any other CMS that supports webhooks might be fine too. I've only tried Sanity though


## The Setup

### Set Up Google Permissions

This is a very terse list of steps you need to take to set up the Google Sheet and Permissions. Check out [Nandi Wong's post for more thorough instructions](https://blog.kintohub.com/how-to-use-google-spreadsheet-for-your-backend-database-29df9b832a96).

1. [Create Project](https://console.developers.google.com/projectcreate): Give it a decent name and _do not_ set the 'Location.
2. [Enable Google Sheets API](https://console.developers.google.com/apis/library/sheets.googleapis.com)
3. [Create Service Account](https://console.cloud.google.com/iam-admin/serviceaccounts/create): Give it a decent name and set the Role to 'Project > Editor'.
4. [Create Service Account Keys](https://console.cloud.google.com/iam-admin/serviceaccounts/): Click the account you just created, then click 'Add Key > Create New Key' and in the Modal, select 'JSON'
5. Keep those keys safe! You need them later and if you lose them you'll have to generate new ones.


### Create and Share Google Sheet

1. [Create a new Spreadsheet](https://docs.google.com/spreadsheets/u/0/create). Remember the id in the url (https://docs.google.com/spreadsheets/d/ __1Eel0ao99uxynFbUe_XODdH_B-f24cwAojOLuc1plPvY__ /edit#gid=0).
2. Share the sheet with your service account bot. For this you need to use the account's email which is something like `<service-account-name>@<project-id>.iam.gserviceaccount.com`.


### Prepare your Netlify project

1. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) (`npm i netlify-cli -g`) and log in (`netlify login`).
2. Initialize your project/hook it up to the cli with `netlify init`.
3. In your project, create a folder `functions` directly in your root directory (i.e. outside/on the same level as `src`).
4. Add `functions = "functions"` to the `[build]` section of your [`netlify.toml` file](https://docs.netlify.com/configure-builds/file-based-configuration/).
5. Run `netlify functions:create --name event-creation` and `netlify functions:create --name event-signup`. In both cases select the 'hello-world' template.
6. Build the functions with `netlify functions:build --src functions`.
7. Run `netlify dev` and ping both functions at [localhost:8888/.netlify/functions/event-creation](http://localhost:8888/.netlify/functions/event-creation) and [localhost:8888/.netlify/functions/event-signup](http://localhost:8888/.netlify/functions/event-signup) repectively to make sure everything works.


### Google Sheets Setup for your Netlify Project

1. Install the [`google-spreadsheet`](https://theoephraim.github.io/node-google-spreadsheet/#/) package with `npm i google-spreadsheet --save`
3. Install the [`isomorphic-fetch`](https://github.com/matthew-andrews/isomorphic-fetch) package with `npm i isomorphic-fetch --save` (to POST to google sheets from your node server)
3. In your .env files add the following:
```
GOOGLE_SPREADSHEET_ID_FROM_URL=<see step 1. in the 'Create and Share Google Sheet' section>
GOOGLE_SERVICE_ACCOUNT_EMAIL=<service-account-name>@<project-id>.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=<the private key that's in the key file you generated in step 4 of the 'Set Up Google Permissions' section>
```

## Event Creation

### Sanity Setup

Sanity has a single webhook that fires whenever you create/delete/update any document. The API looks like this:

```json
{
  "transactionId": "28711ce3-07c4-4c8f-8577-fc8f3c4cbde0",
  "projectId": "3do82whm",
  "dataset": "production",
  "ids": {
    "created": [],
    "deleted": [],
    "updated": [
      "4f0d7277-ac0d-4bfe-ae97-dd4e2378ddaf"
    ],
    "all": [
      "4f0d7277-ac0d-4bfe-ae97-dd4e2378ddaf"
    ]
  }
}
```

But before we can use it, we need to tell the webhook to ping our `event-creation` endpoint. In your [Sanity Dashboard](https://manage.sanity.io/), go to your project and then Settings > API. All the way down you should see 'Webhooks'. There you need to add the path to your function which should be `https://<netlify-project-name>.netlify.app/.netlify/functions/event-creation`. If you haven't deployed your site yet, this is a good point in time to do so.

Additionally, you want to add the `projectId` and `dataset` to your `.env` file since you need to fetch data from it later:
```
SANITY_PROJECT_ID=3do82whm
SANITY_DATASET=production
```

### Building the Lambda Function

What you want to do here is on every webhook call check if the created ids correspond to an event and create a sheet in your Google Sheet.

The code below assumes that your event in Sanity has (amongst others) the following fields:
* `title` (string with the name of the event)
* `startTime` (dateTime of when the event starts)

And assumes that you'll want the following fields in your sheet:

|Timestamp (of the signup)|Name (of the user signing up)|Email (of the user signing up)|
|-|-|-|

With the sheet being called `2020-11-28 Your New Event (some-id-from-sanity)`.

```js
const { GoogleSpreadsheet } = require('google-spreadsheet');
require('isomorphic-fetch');

const API_ENDPOINT = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.SANITY_DATASET}/default`;

const fetchFromSanity = async (id) => {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `{ Event(id: "${id}") { _id title startTime } }` }),
  });

  return response.json();
};

const createEventSheet = async (data) => {
  // load Google Sheet Document
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FROM_URL);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  });
  await doc.loadInfo();

  // format incoming event data for sheet consumption
  const eventId = data._id.replace(/[^a-zA-Z0-9]/g, '');
  const eventDate = new Date(data.startTime).toISOString().split('T')[0];
  const eventTitle = data.title.toString().replace(/[^a-zA-Z0-9\s]/g, '');

  const sheetTitle = `${eventDate} ${eventTitle} (${eventId})`;
  // return early if sheet exists already
  if (!!doc.sheetsByTitle[sheetTitle]) return;

  await doc.addSheet({ headerValues: ['Timestamp', 'Name', 'Email'], title: sheetTitle });
};

exports.handler = async (event) => {
  try {
    const { created } = JSON.parse(event.body).ids;
    if (created.length === 0) return { statusCode: 200 };

    // try to get events for every id
    const newPotentialEvents = await Promise.all(created.map(async (id) => fetchFromSanity(id)));
    // clean out any empty responses for ids that weren't actually events
    const newEvents = newPotentialEvents.filter(Boolean);

    await Promise.all(newEvents.map(async (eventData) => await createEventSheet(eventData)));
    return { statusCode: 200 };
  } catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return { statusCode: 500, body: err.toString() };
  }
};
```

In an actual production environment you might want to do some extra validation on the incoming data since there is no guarantee that your endpoint will only be called from the webhook. So be careful out there!


## Signing Up

The tedious part of setting up everything is pretty much done by now. Building up the signup functionality isn't any easier though. Since this is the endpoint your users will interact with, you need to be extra-careful with your sanitisation and validation of user-input data. And you might want to give more explicit html responses too.

I recommend setting up a honeypot field, similarly to how [Netlify's buily-in form handling](https://docs.netlify.com/forms/setup/) does it.

```js
const { GoogleSpreadsheet } = require('google-spreadsheet');
require('isomorphic-fetch');

// you need all the headers for ...reasons...
const response = (code, message) => ({
  statusCode: code,
  body: message,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Max-Age': 2592000,
    'Access-Control-Allow-Credentials': true,
  },
});

const BASE_FIELDS = ['id', 'name', 'email', 'botField'];

exports.handler = async (event) => {
  // only allow OPTIONS or POST requests
  if (event.httpMethod === 'OPTIONS') return response(200, '');
  if (event.httpMethod !== 'POST') {
    console.log('405 - HTTP Method was: ', event.httpMethod);
    return response(405, 'HTTP Method must be POST or OPTIONS');
  }

  try {
    const data = JSON.parse(event.body);

    // validate input data
    if (!!data.botField) return response(403, 'You look like a bot');
    if (BASE_FIELDS.some((f) => !Object.keys(data).includes(f)))
      return response(422, 'Payload is broken: Base Fields Missing');

    // sanitize data
    const id = data.id.toString().replace(/[^a-zA-Z0-9\s]/g, '');
    const name = encodeURI(data.name)
      .replace('%20', ' ')
      .replace(/[`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    const email = encodeURI(data.email).replace(/[`~!#$%^&*()|=?;:'",<>\{\}\[\]\\\/]/gi, '');

    // load Google Sheet Document
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FROM_URL);
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    await doc.loadInfo();

    // make sure that the sheet for your event exists
    const sheets = doc.sheetsByTitle;
    const sheetTitle = Object.keys(sheets).find((title) => title.includes(id));
    const sheet = sheets[sheetTitle];
    if (!sheet) return response(412, `Sheet with id '${id}' doesn't exist`);

    const { _rowNumber } = await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Name: name,
      Email: email,
    });

    return response(200, `Signup for ${sheetTitle} successful. ID ${_rowNumber - 1}`);
  } catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return response(500, err.toString());
  }
};
```

And there you have it. To register a new sign up, call the endpoint (which should be `https://<netlify-project-name.netlify.app/.netlify/functions/event-signup`) with a POST request with a payload that looks like this:

```json
{
  "botField": "",
  "id": "event-id",
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

