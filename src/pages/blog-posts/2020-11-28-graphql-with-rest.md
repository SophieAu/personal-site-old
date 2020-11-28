---
title: "Fetching Data From a GraphQL Endpoint with REST"
date: 2020-11-28
updated: 2020-11-28
categories: javascript
slug: "graphql-with-rest"
draft: false
---

[GraphQL](https://graphql.org/) is pretty cool and useful but sometimes you just want to do a quick fetch without having to install 500MB of dependencies. And luckily, GraphQL is all about the request body and all the cool syntax-tooling you can get for the frontend is just there for dev ergonomics and not actually necessary.

So without further ado, here's how you 'transform' a GraphQL request into a REST request:

```js
const queryInGQL = graphql`
  query($id: String!) {
    event(id: { eq: $id }) {
      _id
      title
      startTime
    }
  }
`;

const queryForFetch = (id) => `{ event(id: "${id}") { _id title startTime } }`;

await fetch(API_ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: queryForFetch(id) }),
});
```

