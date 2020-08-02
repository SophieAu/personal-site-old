---
title: "Non-Rectangular Borders in CSS"
date: 2020-08-02
updated: 2020-08-02
categories: css web-dev html
slug: "fancy-border"
draft: false
---

<style>
.rootRoot {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
}
.root {
  position: relative;
  height: 300px;
  width: 300px;
  margin: auto;
  background-color: #f9ecee;
  clip-path: polygon(0% 80%, 0% 0%, 100% 0%, 100% 80%, 50% 100%);
}
.bottomBorder {
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #e9bf37;
  clip-path: polygon(0% 80%, 0% 70%, 50% 90%, 100% 70%, 100% 80%, 50% 100%);
}
.image {
  object-fit: contain;
  width: 100%;
}
</style>

## The Goal
You want to give an image (or anything else) a nice non-straight border on the bottom. It's a single solid color and is supposed to look something like this:

<div class="root">
  <img class="image" src="https://avatars1.githubusercontent.com/u/11145039?s=400&u=1e9c3aa86d8e11efe84c8ffdff7312c53c906347&v=4" />
  <div class="bottomBorder" />
</div>

## Step One: Clip the Bottom of the Root Container

Step one is clipping the bottom of the __root__ container using the [clip-path CSS prop](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path). This will make anything outside the clipped area invisible (even if you have `overflow: visible` set). Note that setting the `height` and `width` CSS props is completely optional and only relevant for this exact example. Feel free to adjust these to fit your use case.

```html
<style>
.root {
  height: 300px;
  width: 300px;
  clip-path: polygon(0% 80%, 0% 0%, 100% 0%, 100% 80%, 50% 100%);
}
</style>

<div className="root"></div>
```

<div class="root" style="margin-top: 2rem;"></div>


## Step Two: Insert the Image

Now, just insert the image as a child element of the container. It will be clipped automatically. Any styling you can see below is just for the example. Again, feel free to play around with the image size and position until it fits your specific needs.


```html
<style>
.root {
  height: 300px;
  width: 300px;
  clip-path: polygon(0% 80%, 0% 0%, 100% 0%, 100% 80%, 50% 100%);
}
.image {
  object-fit: contain;
  width: 100%;
}
</style>

<div className="root">
  <img className="image" src="your image here" />
</div>
```

<div class="root" style="margin-top: 2rem;">
  <img class="image" src="https://avatars1.githubusercontent.com/u/11145039?s=400&u=1e9c3aa86d8e11efe84c8ffdff7312c53c906347&v=4" />
</div>




## Step Three: Overlay the Border

We're at the juicy part. Here, you need to overlay a div that represents the border on top of the root container. For that to work, you need to set the position of the `root` class to `relative` to bind any absolutely positioned children to itself. If you don't set the root element to `position: relative`, any absolutely positioned children will position themselves in relation to their nearest containing block. To read more about this, check out the [MDN documentation on Containing Block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block).

As already alluded to you need to set the bottom border div to `position: absolute` to be able to overlay it on top of the image. By default, the div will be positioned as if it was just part of the normal flow though, i.e. just below the image. To position it on top of the image you need to specify `top 0`.

And then, to make it take up the whole area of the root container you need to specify its size. You can either set `width: 100%; height: 100%;` or you can specify the offset from the 'sides' of the container. I tend to go with the latter option but both work just fine.

Finally, you need to clip the content area of the border div similary to the root container. Only now you're not only cipping the bottom of the container but the top as well to allow the image to be visible. Pulled apart, the clipped root container and border would look like this:

<div class="rootRoot" style="margin-top: 2rem;">
  <div class="root">
  </div>
  <div class="root"  style="background-color: #ffffffff;">
    <div class="bottomBorder" ></div>
  </div>
</div>

When you put everything (including the image) together, this is what your fancy component looks like:

```html
<style>
.root {
  position: relative;
  height: 300px;
  width: 300px;
  clip-path: polygon(0% 80%, 0% 0%, 100% 0%, 100% 80%, 50% 100%);
}
.bottomBorder {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e9bf37;
  clip-path: polygon(0% 80%, 0% 70%, 50% 90%, 100% 70%, 100% 80%, 50% 100%);
}
.image {
  object-fit: contain;
  width: 100%;
}
</style>

<div className="root">
  <img className="image" src="your image here" />
  <div className="bottomBorder" />
</div>
```

<div class="root">
  <img class="image" src="https://avatars1.githubusercontent.com/u/11145039?s=400&u=1e9c3aa86d8e11efe84c8ffdff7312c53c906347&v=4" />
  <div class="bottomBorder" ></div>
</div>


## Aside: Why no drop-shadow?

The above technique really only works for solid borders. If you want to have a shadow you will most likely have to switch to using the [`drop-shadow` filter function](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow). `drop-shadow` is great but, like all filter function, comes with a huge potential performance impact.

In this specific use case we could get around it without the solution getting too hacky but your mileage may vary and I'd be remiss if I didn't at least mention the possibility of building this using `drop-shadow`.
