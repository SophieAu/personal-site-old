---
title: "Accessibility on the Web: Focus, Hover and Active States"
date: 2020-06-21
updated: 2020-06-21
categories: javascript web-dev a11y
slug: "web-a11y-states"
draft: false
---

## :focus

The focus state is what you see when a user 'tabs' through a page. Elements that are focusable are everything that has an (implicit) [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex). Elements with implicit tabindex are e.g. links (`<a>`), buttons (`<button>`) and inputs (`<input>`).

Try t yourself and tab through [dev.to](https://dev.to/). You can always see which element is currently selected. And that is because the `:focus` state is set, in most cases simply with the default style.

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
<input id="focus-input" class="focus" placeholder="With Focus" type="text"/>

<button class="non-focus">Without Focus</button>
<label class="visually-hidden" for="non-focus-input">Example Input without Focus:</label>
<input id="non-focus-input" class="non-focus" placeholder="Without Focus" type="text"/>
<style>
  .non-focus:focus { outline: none;}
</style>

Now, I'm not saying you should never remove the `outline` style. It's totally legitimate to do this. Just make sure you're only doing it on a case-by-case basis and that in every instance you have an alternative style. This is absolutely fine:

<button class="custom-focus">Custom Focus</button>
<label class="visually-hidden" for="custom-focus-input">Example Input with Custom Focus:</label>
<input class="custom-focus" id="custom-focus-input" placeholder="Custom Focus" type="text"/>
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
    <button class="custom-focus">Custom Focus</button>
</div>
<style>
  .custom-focus:focus {
    outline: none;
    background-color: lightgreen;
  }
  .wrapper:focus-within {
      background: lightblue;
      padding: 10px;
  }
</style>





## :focus-visible
---


What you need to care about:
* :focus-visible is a nice new pseudo-class that's only supported in firefox (so far). It only sets when the element has been focused with a keyboard, not with the mouse

```css
:focus:not(:focus-visible) {
    outline:none;
}
```
get rids of the focus outline for mouse users but preserves it for keyboard users and anyone with a browser that doesn't support `:focus-visible`


## :hover

The hover state is probably the most well-known 'interative state' It helps the user to be aware of where they are and that the element they're on at the moment is interactive.

<a class="hover">With Hover</a>
<style>
  #article .hover:hover {
    text-decoration: none;
    color: black;
  }
</style>

<a class="non-hover">Without Hover</a>


hover can be a bit more subtle since the user is generally aware of where they'r hovering at the moment



## :active

riggers when you interact with an element. Interacting here means:

    Holding down your left mouse button on an element (even non-focusable ones)
    Holding down the Space key (on buttons)


