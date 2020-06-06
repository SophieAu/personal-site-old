---
title: "Accessibility on the Web: Semantic HTML"
date: 2020-06-28
updated: 2020-06-28
categories: javascript web-dev a11y
slug: "web-a11y-semantic"
draft: false
---



# POST: Use semantic html wherever possible

be aware fo stuff like this:

```
h1 + button // ✅ H1 will show up when navigating by headings
button + h1 // ❌ H1 will not show up when navigating by headings
``` 

## new post link v button
is it a redirect? use link and style like button
is it a button? use button style s link

never!!!!! put a link int a buttton or a button into a link. i will haunt you!

dont set target on links unless you are really really sure you want the link to open in a new tab. you need a good reason though

