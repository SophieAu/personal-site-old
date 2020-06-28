---
title: "Accessibility on the Web: Enhance"
date: 2020-99-99
updated: 2020-99-99
categories: javascript web-dev a11y
slug: "web-a11y-enhance"
draft: true
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

To announce dynamic changes to the content on your page, you need to surround it in a `aria-live` region,. This region needs to exist before and after the change. Some `role`s will implicitly create aria live regions too. Note that the regions will also not be announced on their initial creation but only when their contents change. Make sure you create a aria-live region on initial render, even if it's gonna be empty to begin with. Also scope the region as far down as possible. Don't wrap the whole page in a region


An `aria-live` region can have three values or Politness settings:

* *off*: Nothing will be announced. This is essentially every 'normal' element i.e. as if you hadn't set `aria-live` at all
* *polite*: The change will be announced once the user is not doing anything else. This is the one you should go to by fedault
* *assertive*: A change will be announced as soon as possible which might mean interrupting the user or but it depends on the screen reader. Only use this for genuinely important updates (e.g. errors and crashes)



### Roles


Role 	Description 	Compatibility Notes
log 	Chat, error, game or other type of log 	To maximize compatibility, add a redundant aria-live="polite" when using this role.
status 	A status bar or area of the screen that provides an updated status of some kind. Screen reader users have a special command to read the current status. 	To maximize compatibility, add a redundant aria-live="polite" when using this role.
alert 	Error or warning message that flashes on the screen. Alerts are particularly important for client side validation notices to users. (TBD: link to ARIA form tutorial with aria info) 	To maximize compatibility, some people recommend adding a redundant aria-live="assertive" when using this role. However, adding both aria-live and role="alert" causes double speaking issues in VoiceOver on iOS.
progressbar 	A hybrid between a widget and a live region. Use this with aria-valuemin, aria-valuenow and aria-valuemax. (TBD: add more info here). 	
marquee 	for text which scrolls, such as a stock ticker. 	
timer 	or any kind of timer or clock, such as a countdown timer or stopwatch readout.