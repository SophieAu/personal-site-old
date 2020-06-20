---
title: "Accessibility on the Web: Language"
date: 2020-08-02
updated: 2020-08-02
categories: javascript web-dev a11y
slug: "web-a11y-language"
draft: true
---

The best aria is no aria at all

# Language Level



# POST OTHER:  Set language of the page

```js
navigator.languages
    ? navigator.languages[0]
    : navigator.language || navigator.userLanguage || "en";
```
