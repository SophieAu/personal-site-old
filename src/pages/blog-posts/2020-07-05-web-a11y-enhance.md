---
title: "Accessibility on the Web: Enhance"
date: 2020-07-05
updated: 2020-07-05
categories: javascript web-dev a11y
slug: "web-a11y-enhance"
draft: true
---

Generally you do not want to add extra bells and whistles to your website just for screen reader users. It's generally a sign that the website doesn't work for sighted users either. Also, there are users who are using a screen reader while looking at the screen (e.g. people with reading disabilities, vision-impaired users). Adding extra-content for the screen reader that the user cannot see would just be very confusing. There are howeer a few excptions to the rule:


## Skip to Content Button
If you have a meaty header and/or long nav list it might be a good idea to add a 'skip to content' button that is only 'visible' to screen readers. This allows, as the name says, screen reader users to go straight to the content, skipping headers, nav and whatever you specify. You should make this button visible on focus though as to not confuse sighted users who are tabbing through your page.

To have the button keyboard-accessible but not visible, use [this visually-hidden css class](https://github.com/SophieAu/util/blob/master/css/visually-hdden.css).


## Announce Dynamic Content
