---
title: "CSS Grid Tips and Tricks"
date: 2020-08-23
updated: 2020-08-23
categories: css web-dev html
slug: "grid-tricks"
draft: false
---

## Have once column in content width, let the other(s) take the remaining space

```css
.grid {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
}
```

<style>
.grid {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-gap: 8px;
  margin: 0.5rem 0 1rem;
  background-color: silver;
}
.grid > p {
  border: 1px solid grey;
  padding: 0 4px !important;
}
</style>
<div class="grid">
  <p>When:</p>
  <p>23.05.2020</p>
  <p>16:45</p>
  <p>Where:</p>
  <p>Brandenburger Tor</p>
  <p>Germany</p>
</div>

Not using `minmax(0, 1fr)` but just going with `1fr` allowes the content to break out of the container (grey background). This is, because `1fr` is shorthand for `minmax(auto, 1fr)`.


With `1fr` only (i.e. `minmax(auto, 1fr)`):
<style>
.grid-almost {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 8px;
  margin: 0.5rem 0 1rem;
  background-color: silver;
}
.grid-almost > p {
  border: 1px solid grey;
  padding: 0 4px !important;
}
</style>
<div class="grid-almost">
  <p>When:</p>
  <p>23.05.2020</p>
  <p>16:45</p>
  <p>Where:</p>
  <p>Brandenburger_Tor,_which_is_somewhere_in_Berlin.</p>
  <p>Germany</p>
</div>

With `minmax(0,1fr)` (which isn't great either but illustrates the point):
<div class="grid">
  <p>When:</p>
  <p>23.05.2020</p>
  <p>16:45</p>
  <p>Where:</p>
  <p>Brandenburger_Tor,_which_is_somewhere_in_Berlin.</p>
  <p>Germany</p>
</div>


### Reference:
* [This StackOverflow thread asking the exact question](https://stackoverflow.com/questions/19848697/css-grid-where-one-column-shrinks-to-fit-content-the-other-fills-the-remaning-s)