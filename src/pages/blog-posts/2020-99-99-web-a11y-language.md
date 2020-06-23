---
title: "Accessibility on the Web: Language"
date: 2020-08-02
updated: 2020-08-02
categories: javascript web-dev a11y
slug: "web-a11y-language"
draft: true
---
hem
## Language Level

Which language level you should use depends heavily on your target group. If you have a landing page for a run-of-the-mill mobile app you'll probably want to stick to a reading level around Middle School (which is kids around 14). If you target philosophy majors you can of course go with a higher level. Always keep in mind though that not everyone who's reading your text is going to be fluent in English. So try to make yourself understood with 'simple' words. Also try to [avoid using condescending words and phrases](https://css-tricks.com/words-avoid-educational-writing/) such as 'basically, 'only', 'it's really easy'. It might not be for your reader and could make them feel stupid.


## Default Language

If you offer your site in multiple languages, do not use the user's location to decide on which language to use. Just because I'm on vacation in Spain doesn't mean I'm suddenly fluent in Spanish. Instead, use what they set in the settings. This is the snippet I tend to use:

```js
navigator.languages
    ? navigator.languages[0]
    : navigator.language || navigator.userLanguage || "en";
```

## Resources
* [Hemingway](https://hemingwayapp.com/): An online editor that checks your writing and highlights opportunities for improvement.
