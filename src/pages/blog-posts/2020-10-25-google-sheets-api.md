---
title: "Using the Google Sheets API to save event sign-ups"
date: 2020-10-25
updated: 2020-10-25
categories: javascript
slug: "google-sheets-api"
draft: true
---


INTRO TEXT HERE

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

1. [Create a new Spreadsheet](https://docs.google.com/spreadsheets/u/0/create)
2. Share the sheet with your service account bot. For this you need to use the account's email which is something like `<service-account-name>@<project-id>.iam.gserviceaccount.com`.


### Prepare your Netlify project

1. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) (`npm i netlify-cli -g`) and log in (`netlify login`).
2. Initialize your project/hook it up to the cli with `netlify init`.
3. In your project, create a folder `functions` directly in your root directory (i.e. outside/on the same level as `src`).
4. Add `functions = "functions"` to the `[build]` section of your [`netlify.toml` file](https://docs.netlify.com/configure-builds/file-based-configuration/).
5. Run `netlify functions:create --name event-creation` and `netlify functions:create --name event-signup`. In both cases select the 'hello-world' template.
6. Build the functions with `netlify functions:build --src functions`.
7. Run `netlify dev` and ping both functions at [localhost:8888/.netlify/functions/event-creation](http://localhost:8888/.netlify/functions/event-creation) and [localhost:8888/.netlify/functions/event-signup]http://localhost:8888/.netlify/functions/event-signup) repectively to make sure everything works.


### 

## Creating Events

* Sanity Webhook
* function


## Signing Up
