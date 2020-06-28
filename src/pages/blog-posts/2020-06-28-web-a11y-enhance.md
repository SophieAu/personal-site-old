---
title: "Accessibility on the Web: Enhance"
date: 2020-06-28
updated: 2020-06-28
categories: javascript web-dev a11y
slug: "web-a11y-enhance"
draft: false
---

Generally you do not want to add extra bells and whistles to your website just for screen reader users. It's generally a sign that the website doesn't work for sighted users either. Also, there are users who are using a screen reader while looking at the screen (e.g. people with reading disabilities, vision-impaired users). Adding extra-content for the screen reader that the user cannot see would just be very confusing. There are howeer a few excptions to the rule:


## Skip to Content Link
If you have a meaty header and/or long nav list it might be a good idea to add a 'skip to content' link that is only 'visible' to screen readers. This allows, as the name says, screen reader users to go straight to the content, skipping headers, nav and whatever you specify. You should make this link visible on focus though as to not confuse sighted users who are tabbing through your page.

To have the link keyboard-accessible but not visible, use [this visually-hidden css class](https://github.com/SophieAu/util/blob/master/css/visually-hdden.css) and use the `focus` pseudo-class to show the link on focus.

Usually you'll want the link to be the first thing the user tabs to on the page but in this example it's gonna appear once you've tabbed past this paragraph (for demonstration purposes): 

<style>
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  word-wrap: normal;
}
.visually-hidden:focus {
  clip: unset;
  height: unset;
  margin: unset;
  width: unset;
  top: 0;
  left: 0;
  background-color: white
}
</style>

<a class="visually-hidden" href=".">
  Skip to Content Link (that takes you to the top of this post)
</a>

```css
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  word-wrap: normal;
}
.visually-hidden:focus {
  clip: unset;
  height: unset;
  margin: unset;
  width: unset;
  top: 0;
  left: 0,
}
```

```html
<a class="visually-hidden" href=".">
  Skip to Content Link (that takes you to the top of this post)
</a>
```

## Announce Dynamic Content

To announce dynamic changes to the content on your page, you need to surround it with an `aria-live` region. This region needs to exist before (even if it's empty) and after the change, which in most cases means from initial render.

ARIA live regions will not be announced on creation but only when their content changes. Which means that you'll want to declare the region as close to the actually changing content as possible. Do not wrap your whole page in a live region but only the actual element that directly contains the dynamic content.

An `aria-live` region can have three values or Politness settings which will define when/if a user is made aware of changes:

* **off**: Nothing will be announced. This is essentially every 'normal' element i.e. as if you hadn't set `aria-live` at all
* **polite**: The change will be announced once the user is not doing anything else. This is the one you should go to by fedault
* **assertive**: A change will be announced as soon as possible which might mean interrupting the user or but it depends on the screen reader. Only use this for genuinely important updates (e.g. errors and crashes)


### Roles

Some `role`s will implicitly create aria live regions too. The most important ones are:

* **log**: A non-critical notification such as a new chat or error messsage. `polite` by default but add a redundant `aria-live="polite"` for screen reader compatibility
* **status**: A status update of any kind. `polite` by default but add a redundant `aria-live="polite"` for screen reader compatibility
* **alert**: A critical warning or error message (e.g. for client-side validation of input). `assertive` by default.
