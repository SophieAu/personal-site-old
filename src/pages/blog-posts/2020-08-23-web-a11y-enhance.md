---
title: "Accessibility on the Web: Enhance"
date: 2020-08-23
updated: 2020-08-23
categories: javascript web-dev a11y
slug: "web-a11y-enhance"
draft: true
---

Generally you do not want to add extra bells and whistles to your website just for screen reader users. It's generally a sign that the website doesn't work for sighted users either. Also, there are users who are using a screen reader while looking at the screen (e.g. people with reading disabilities, vision-impaired users). Adding extra-content for the screen reader that the user cannot see would just be very confusing. There are howeer a few excptions to the rule:


## Skip to Content Button
If you have a meaty header and/or long nav list it might be a good idea to add a 'skip to content' button that is only 'visible' to screen readers. This allows, as the name says, screen reader users to go straight to the content, skipping headers, nav and whatever you specify. You should make this button visible on focus though as to not confuse sighted users who are tabbing through your page.

To have the button keyboard-accessible but not visible, use [this visually-hidden css class](https://github.com/SophieAu/util/blob/master/css/visually-hdden.css).




<a class="screen-reader-shortcut" href="#main-content">
  Skip to main content
</a>

The ‘Skip to main content’ link has limited use to sighted users, who can already skip the navigation by using their eyes. So, whilst some sites keep the skip link visible at all times, the convention nowadays is to keep the link hidden until you tab into it, at which point it is in focus and gains the styling applied by the :focus pseudo selector.

.screen-reader-shortcut {
  position: absolute;
  top: -1000em;
}

.screen-reader-shortcut:focus {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  /* ...and now any nice styling you want to apply... */
  padding: 1em;
  background-color: rgb(114, 105, 105);
  color: white;
  text-decoration: none;
}



## Announce Dynamic Content
