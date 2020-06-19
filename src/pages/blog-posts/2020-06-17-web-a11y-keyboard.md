---
title: "Accessibility on the Web: Keyboard Navigation"
date: 2020-06-17
updated: 2020-06-17
categories: javascript web-dev a11y
slug: "web-a11y-keyboard"
draft: false
---

Testing your website for keyboard navigation is actually a comparatively simple and quick win. You might even do it already, tabbing through forms to get from one field to the next. Screen readers go through your site the same way as keyboards (and generally speaking screen reader users will be using a keyboard to navigate your site) which means that if you can't reach something with your keyboard neither will a screen reader. 

In most browsers, it should work out of the box. Just go to any website and start tabbing through them. One more complec site, that I think is doing a good job [dev.to](https://dev.to/). Just tab through and see how they make sure that you always know where you are. And everything that looks interactive is reachable and usable with the keyboard too.

In most cases, using [semantic html](/articles/web-a11y-semantic) will do all the heavy lifting for you so you only need to worry about edge cases.


## Making an element keyboard accessible

There are very few cases where you need to manually add an element to the 'taborder'. In most cases, simply using semantic elements such as `button` and `a` should be enough. But sometimes there are weird edge cases where you want to manually make an element interactive in which case, you can add `tabindex=0` to an element. This way it will be added to the taborder according to its position in the DOM.

<div tabindex=0>I can be focused</div>


## Respecting the visual order

Despite everything that CSS can do for you, don't go overboard with the positioning. You'll want to keep the visual order in sync with the DOM order. Which includes trying to avoid `flex-direction: row-reverse` or `flex-direction: column-reverse`. And similar such shenanigans with CSS Grid. Flex and Grid are really cool toys but can also be misused easily.


## Avoiding forced focus

Try to avoid auto-focusing elements. Especially on page-load. You want to give a user the chance to figure out where they are before being asked to e.g. put in their email into a form.


## onHover and onFocus should have the same behaviour

While elements should have different styles for these states, the underlying behaviour should be the same. When a dropdown opens on hover it should also opne on facus.


## Keep invisible content invisible

When you're hiding elements on the page, e.g. behind a slider, make sure you're hiding them properly. Usually `display: none` works well. What it boils down to is: Anything that a user can interact with with a mouse should be keyboard accessible. And anything that the user can't interact with with a mouse should not be accessible with the keyboard. This rule of course falls apart when you introduce elements [specifically for keyboard users](/articles/web-a11y-enhance) but it still stands in general.


## Overlays should be on top of your 'tab hierarchy'

If you have a screen overlay like e.g. a cookie banner that obscures the screen to the user, make sure it's the first thing they'll tab to. You should be able to do this by simply putting the element at the top of your DOM order but if for some reason that doesn't work you can fall back to the `tabindex` here.
