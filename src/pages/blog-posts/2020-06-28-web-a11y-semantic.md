---
title: "Accessibility on the Web: Semantic HTML"
date: 2020-06-28
updated: 2020-06-28
categories: javascript web-dev a11y
slug: "web-a11y-semantic"
draft: false
---

The best aria is no aria at all. Which means that we need to move away from using divs for everything and move toward using all the fancy built-in elements that html provides. There's [around 100 of them](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

Now, divs aren't the devil all the time but the should only ever be a wrapper you need for styling purposes. Divs shouldn't be interactive or have meaning. Take for example this:

<div style='display:flex; flex-direction:row; padding: 16px; border: 1px solid'>
  <div onclick="window.location.assign(window.location);">Link 1</div><span style="width: 24px;"></span><div onclick="window.location.assign(window.location);">Link 2</div>
</div>

If you try to click on the 'link items' the page does reload (technically you're being redirected to this current page). But there's zero indication that these are actual links. And you can't even reach the links with your keyboard.

For comparison take this:

<div style='display:flex; flex-direction:row; padding: 16px; border: 1px solid'>
  <a href="">Menu Item Link 1</a><span style="width: 24px;"></span><a href="">Menu Item Link 2</a>
</div>

Here, you can see that both are links. And you can reach them with your keyboard.


Now, this is a fairly contrived example but what is true for links is true for every other html element. There is a reason for the `header`s, `footer`s and `nav`s. Same with lists and buttons. Especially lists and buttons. Please use them.

While some of the elements seem to have no actual visual value when you use them, they quite often have a very specific role when it comes to screen readers. For example, a `section` allows users to easily skip over, well, sections of your website. A sighted user will just scroll to whatever looks like the next section to them but screenreader users don't have that luxury.


## On Buttons (and Links a bit)

One of the most neglected and misused elements I constantly see is the humble `<button />` element. There is usually two things that people do wrong

1. Using buttons as links and links as buttons
2. usng divs with `onclick` handlers as buttons

Number one is easily remedied with a single question: Does the thing you click on _only_ redirect you to a different webpage? If yes, it should be a link. If there is any behaviour that is not just redirection it should be a button.

The good thing here: Just because the element is a button, doesn't mean that it has to look like a button. If you want it to look like a link, style it as if it was a link. Same goes for `a` elements. Do you want it to look like a button? Just style it that way. The default styles are only a suggestion and as long as you're making sure you're [styling all states correctly]() you're free to do whatever you think looks best.

Number two is also easily remedied: Just use a button element. There must be some super edge-case-y behaviour going on for you to be able to justify using a `div`. You can style buttons however you want. And it's just so much easier. To make a div-button accessible you need to set: tabindex, onclick, onkeypress, role, ... You will be able to find perfectly accessible div-buttons examples on the internet but I'm not even gonna link you one because: Please don't do it.