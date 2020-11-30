---
title: "Accessibility on the Web: The Big Picture"
date: 2020-06-26
updated: 2020-11-29
categories: javascript web-dev a11y
slug: "web-a11y-big-picture"
draft: false
---

## What is A11Y and Who is it for?

Making your app or website accessible means making it usable for all people regardless of their limitations. Those limitations often are but aren't exclusively what we consider disabilities. Those can be grouped into roughly 4 categories:

* Visual Impairments (e.g. color-blindness, blindness)
* Motor Impairments (e.g. missing or paralyzed limbs)
* Neurological Disorders (e.g. autism, learning disabilities, epilepsy)
* Hearing Impairments (e.g. deafness, tinnitus)

According to the [WHO World report on disability](https://www.who.int/disabilities/world_report/2011/report/en/) around 15% of the world's population deals with some sort of permanent disability. And this excludes people who have temporary or situational disabilities such as: a broken arm, lost their glasses, ...

These people actually have a legal (and moral) right to access your app/website.


### Non-Default Users

There's another category of users though that fall under the accessibility umbrella that you should cater to. I call these 'Non-Default Users'. With very, very heavy sarcasm though. They are in contrast to the 'Default User' who has the following traits:
* white
* heterosexual
* cis-male
* aged between 20 and 45
* tech savvy
* are fluent in English
* have a Christian/Anglo-Saxon first and last name
* live in an English-language (or at least 'Western') country
* have the newest/fastest devices
* always have a great internet connection with unlimited data
* have 'Western' values (whatever that is...)
* right-handed
* of average height and limb size
* calm, rational and collected

This persona is generally what apps and websites coming out of silicon valley and all the other big tech hubs in the 'West' have as a target user. Technically, catering to people who aren't on the disability spectrum but don't fall into the 'default user group' isn't part of accessibility but instead 'inclusive design' but in my experience those two go hand in hand.


## Why Should You Care?

Reason number one: Because it's the right thing to do. 

You'd think that would be a good enough argument but unfortunately management is usually like: "If we spend all our time making our app accessible instead of launching it we will have 0 users". While I get the sentiment, getting to a base-level of accessibility is usually not a lot of effort. Accessbility doesn't mean that your app needs to function 100% the way it does for people without accessibility aids. Just that it's 'accessible' (i.e. usable).

Having your app/website not usable also leaves you at the risk of getting sued (just as [Beyoncé did a while back](https://www.theguardian.com/music/2019/jan/04/beyonce-parkwood-entertainment-sued-over-website-accessibility)). The fear of getting sued usually makes management listen very closely.

While there's no official guidelines on how accessible your website needs to be to not get sued there are [WCAG Success Criteria](https://www.w3.org/TR/WCAG21/#wcag-2-layers-of-guidance) that have been adopted as more or less the legal standard. The average app or website should comply with the AA level whereas certain government platforms need to comply with AAA.


## Resources

### Screen Readers
* Mac: [VoiceOver](https://www.apple.com/accessibility/mac/vision/)
* Windows: [Narrator](https://support.microsoft.com/en-us/help/22798/windows-10-complete-guide-to-narrator), [NVDA](https://www.nvaccess.org/about-nvda/), [JAWS](https://www.freedomscientific.com/products/software/jaws/)
* iOS: [VoiceOver](https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/ios)
* Android: [TalkBack](https://support.google.com/accessibility/android/answer/6007100?hl=en&ref_topic=3529932)
* Bonus: [ChromeVox](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn) for Chrome

### Documentation and Pattern Libraries
* [MDN Accessibility Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
* [Google Web Fundamentals: Accessibility](https://developers.google.com/web/fundamentals/accessibility)
* [WAI ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/): Instructions on how to write accessible components
* [A11Y Style Guide](https://a11y-style-guide.com/style-guide/): Pattern library to help you build accessible components
* [Inclusive Components](https://inclusive-components.design/): Another pattern library with accessible components

### Browser Extensions for A11y Testing
* [WAVE](https://wave.webaim.org/extension/)
* [tota11y](https://khan.github.io/tota11y/)
* [axe](https://www.deque.com/axe/)
* [Accessibility Insights](https://accessibilityinsights.io/): Chrome and Edge only
* [Pa11y](https://pa11y.org/): Not technically a browser extension but a command line tool
* [Sa11y](https://ryersondmp.github.io/sa11y/)

### Consulting Companies with Blogs
* [WebAIM](https://webaim.org/)
* [axess lab](https://axesslab.com/)
* [Simply Accessible](http://simplyaccessible.com/)
* [Fable Tech Labs](https://www.makeitfable.com/) (they don't have a blog though)
* [deque](https://www.deque.com/) (the folks behind the axe browser extension)
* [Intopia](https://intopia.digital/)
* [Hassell Inclusion](https://www.hassellinclusion.com/)

### Other Links
* [The A11Y Project](https://a11yproject.com/): Community-driven resources about all things a11y
* [A11yWeekly](https://a11yweekly.com/): Weekly newsletter about all things web accessibility
* [A11y Rules](https://a11yrules.com/): Podcast with conversations around web accessilibity
* [HTMLHell](https://www.htmhell.dev/): A blog about bad html code. Not necessarily built around accessibility but most of the issues have accessbibility implications too
* [Vox Media's Accessibility Checklist](http://accessibility.voxmedia.com/): A checklist for all stages in your product lifecycle
* [Manuel Matuzovic's Blogpost on optimizing websites for Screen Readers instead of Default Users](https://www.matuzo.at/blog/accessible-to-some/)
* [A11y Coffee](https://a11y.coffee/): A small side with a short overview on web accessibility and a ton of links to other resources
* [a11yresources](https://a11yresources.webflow.io/): A huge list of web accessibility resources
* [Accessibility Acceptance Criteria](https://a11yengineer.com/): Let's you build your own accessibliity checklist
