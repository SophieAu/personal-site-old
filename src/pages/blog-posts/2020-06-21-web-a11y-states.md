---
title: "Accessibility on the Web: Focus, Hover and Active States"
date: 2020-06-05
updated: 2020-06-21
categories: web-dev a11y
slug: "web-a11y-states"
draft: false
---

## :focus

The focus state is what you see when a user 'tabs' through a page. Elements that are focusable are everything that has an (implicit) [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex). Elements with implicit tabindex are e.g. links (`<a>`), buttons (`<button>`) and inputs (`<input>`).

Try it yourself and tab through [dev.to](https://dev.to/). You can always see which element is currently selected. And that is because the `:focus` state is set, in most cases simply with the default style.

NEVER DO THIS:

```css
*:focus {
    outline: none;
}
```

What you're doing here is hiding any indication of where the user is when they're using the keyboard. Look at the two buttons and inputs below. Tab your way there and see how the first one has an outline when it's in focus whereas the 2nd doesn't.

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
</style>

<button class="focus">With Focus</button>
<label class="visually-hidden" for="focus-input">Example Input with Focus:</label>
<input id="focus-input" class="focus" value="With Focus" type="text"/>

<button class="non-focus">Without Focus</button>
<label class="visually-hidden" for="non-focus-input">Example Input without Focus:</label>
<input id="non-focus-input" class="non-focus" value="Without Focus" type="text"/>
<style>
  .non-focus:focus { outline: none;}
</style>

Now, I'm not saying you should never remove the `outline` style. It's totally legitimate to do this. Just make sure you're only doing it on a case-by-case basis and that in every instance you have an alternative style. This is absolutely fine:

<button class="custom-focus">Custom Focus</button>
<label class="visually-hidden" for="custom-focus-input">Example Input with Custom Focus:</label>
<input class="custom-focus" id="custom-focus-input" value="Custom Focus" type="text"/>
<style>
  .custom-focus:focus {
    outline: none;
    background-color: lightgreen;
  }
</style>

```css
.button:focus, input:focus {
    outline: none;
    background-color: lightgreen;
  }
```

Just make sure that the focus state is very different from the 'normal' state since a user will not always know where the next focus is going to be when they press 'tab'. Having a distinct design change in an element makes it easier for the user to find the newly focus element.


## :focus-within

Focus-within is kind of an extension of the focus state. Like the name says it is triggered when a descendant (child-element) gets focus:

<div class="wrapper">
    <button class="fpcus-within-btn">Focus Within Button</button>
</div>
<style>
  .fpcus-within-btn:focus {
    outline: none;
    background-color: lightgreen;
  }
  .wrapper:focus-within {
      background: lightblue;
      padding: 10px;
  }
</style>


## :focus-visible

focus-visible is a nice but very new and [barely-supported](https://caniuse.com/#feat=mdn-css_selectors_focus-visible) pseudo class. It is only set when an element was focus using the keyboard. When you focused an element by clicking on it with a mouse the styles are not applied.

<button class="focus-visible">Focus Visible</button>
<style>
  .focus-visible:-moz-focusring {
    outline: none;
    background-color: lightgreen;
  }
  .focus-visible:focus-visible {
    outline: none;
    background-color: lightgreen;
  }
</style>


While `focus-visible` isn't very supported at the moment, there is a a nice little helper to only style the outline of 'mouse-focussed' elements that falls back to default styling.

```css
:focus:not(:focus-visible),
:focus:not(:-moz-focusring) {
    outline: red solid 1px; 
}
```
 So, on 'mouse-focus' the element will have a red outline while on 'keyboard-focus' and if `focus-visible` isn't supported, the elemnt will have the default browser outline.


## :hover

The hover state is probably the most well-known 'interative state'. It is the state you see when you hover (i.e. position your mouse without clicking) over an element. It makes the user aware that the element they're on is interactive. Since a user is generally aware of where they are, the hover state can be a bit more subtle than e.g. the focus state.

<a class="hover">Link with Hover</a>
<style>
  #article .hover:hover {
    text-decoration: none;
    color: black;
  }
</style>

<a class="non-hover">Link without Hover</a>


## :active

The active state is one you usually barely notice but it's still important to be set. You'll see it when you're currently clicking on an element and when you're holding doen the 'space' key on a button. So essentially you'll see it when the element is currently 'active', as the name says.

Since it is rarely seen and is only triggered when the user is either hovering over or focussed on an element, the styling can be a bit more subdued, potentially even more so than for the hover state.

<button class="default-active">Default Active</button>
<button class="custom-active">Custom Active</button>
<style>
  .custom-active:active { background-color: lightgreen;}
</style>
