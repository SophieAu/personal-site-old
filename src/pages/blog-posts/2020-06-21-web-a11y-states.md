---
title: "Accessibility on the Web: Buttons, Links and States"
date: 2020-06-21
updated: 2020-06-21
categories: javascript web-dev a11y
slug: "web-a11y-states"
draft: false
---



## 4. design all states (esp. :focus)


```css
:focus:not(:focus-visible) {
    outline:none;
}
```

gt rids of the focus outline for mouse users but preserves it for keyboard users and anyone with a browser that doesn't support `:focus-visible`




## link v button
is it a redirect? use link and style like button
is it a button? use button style s link

never!!!!! put a link int a buttton or a button into a link. i will haunt you!

dont set target on links unless you are really really sure you want the link to open in a new tab. you need a good reason though


What you need to care about:
* focus states. never override the default state unless you're providing an alternative (which means never set `outline: none` unless you defined an alternative)

* :focus-visible is a nice new pseudo-class that's only supported in firefox (so far). It only sets when the element has been focused with a keyboard, not with the mouse

