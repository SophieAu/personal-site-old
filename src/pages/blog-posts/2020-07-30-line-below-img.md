---
title: "How to fix that annoying space below your <img />"
date: 2020-07-30
updated: 2020-07-30
categories: html css web-dev
slug: "line-below-img"
draft: false
---

Having a weird spacing line below `<img />`s is the bane of my existence. So here I've documented the (usually) quick fix for everyone like me who always forgets:


## The Problem

You want to wrap an image in a container and have it take up the whole space. But it always adds a seemingly random margin below the image as you can see below:

```css
.container {}

.image {
    height: 100%;
    width: 100%;
}
```

```html
<div class="container">
    <img class="image" src="your image here"/>
</div>
```


<div style="background: grey; width: 200px;">
    <img style="height: 100%; width: 100%;" src="https://avatars1.githubusercontent.com/u/11145039?s=400&u=1e9c3aa86d8e11efe84c8ffdff7312c53c906347&v=4"/>
</div>



## The Solution

The solution is (in most cases) a single line of CSS: You need to set `display: block` on the image. If you want to know more about why this is the solution, have a look at the [MDN Docs on the display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

```css
.container {}

.image {
    display: block;
    height: 100%;
    width: 100%;
}
```

```html
<div class="container">
    <img class="image" src="your image here"/>
</div>
```


<div style="background: grey; width: 200px;">
    <img style="height: 100%; width: 100%; display: block;" src="https://avatars1.githubusercontent.com/u/11145039?s=400&u=1e9c3aa86d8e11efe84c8ffdff7312c53c906347&v=4"/>
</div>


