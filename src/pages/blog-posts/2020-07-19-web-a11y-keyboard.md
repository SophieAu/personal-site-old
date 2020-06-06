---
title: "Accessibility on the Web: Keyboard Navigation"
date: 2020-07-19
updated: 2020-07-19
categories: javascript web-dev a11y
slug: "web-a11y-keyboard"
draft: true
---

The best aria is no aria at all




# POST: traverse your website with keyboard only
* all screen readers hook into your site the same way as the keyboard -> if you can't navigate your page using your keyboard neither can a screen reader.
* don't set autofocus (don't use unless you have a good reason)

## 11.2 ensure everything interactive is keyboard-accessible

## 11.3 visual order and dom order should alawys match.

if you need to use e.g. flex row=reverse set the tabindex properly. but ideally, don't use the 'reverse' value at all. it was a shitty move to even add it to the spec.
