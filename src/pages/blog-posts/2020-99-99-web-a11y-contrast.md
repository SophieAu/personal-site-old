---
title: "Accessibility on the Web: Colors and Typography"
date: 2020-07-12
updated: 2020-07-12
categories: javascript web-dev a11y
slug: "web-a11y-contrast"
draft: true
---



## Color Contrast

The W3C has released [guidelines on color contrast](https://www.w3.org/TR/WCAG21/%23contrast-minimum). But they're not the easiest read and having to recalculate them everytime you want to use two colors is a bit much. Luckily there's a bunch of tools to help you out. You can find a few of them below in the Resources section.

The general rules are:

|Ratio      | Use Case                                                  |
|-----------|-----------------------------------------------------------|
|< 3:1      | Purely decorative elements only                           |
|> 3:1      | Very large text and to indicate disabled/inactive states  |
|> 4.5:1    | All other text (including text in images)                 |


## Fonts Size and Zoom

### Size

What do you need to do?

There are two main concerns when working with font sizes:

    Ensuring that default font sizes are not too small.
    Ensuring that text can be expanded to 200% on websites.[1]

Keep in mind these recommendations and guidelines:

    Use 12 point for body text. For most documents, body text should be around 12 points. Small fonts may be illegible for some audiences.
     Use 9 point for footnotes. If a document contains footnotes or endnotes, the minimum size should be 9 points.
    The Web Content Accessibility Guidelines (WCAG 2.0) recommend ensuring that text can be zoomed to 200%. As well, we recommend using liquid layouts[2] that can accommodate 200% text.

  allow zoom


### Zoom

### Font family

### Font Style
* all caps
* weight
* serif vs sans serif



## Tap Area



## Resources

* [Who Can Use](https://whocanuse.com/): Add a color combination and check what it will look like for different visual deficiencies
* [Toptal Color Blind Filter](https://www.toptal.com/designers/colorfilter): Check what whole websites look like for certain visual deficiencies
* [The Chrome Dev Tools](https://developers.google.com/web/updates/2020/03/devtools#vision-deficiencies): Amongst other things they have built-in visual deficiency simulation
* [Leonardo](https://leonardocolor.io): Generate colors based on their contrast ratio to a base color.

* [Contrast](https://usecontrast.com/) and [Contraste](https://contrasteapp.com/): Mac menu bar apps to check WCAG color contrast ratios
* [Stark](https://www.getstark.co/): A plugin for your favourite design tool (Figma, Sketch, Adobe XD)
