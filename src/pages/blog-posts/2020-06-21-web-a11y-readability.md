---
title: "Accessibility on the Web: Readability"
date: 2020-06-21
updated: 2020-06-26
categories: javascript web-dev a11y
slug: "web-a11y-readability"
draft: false
---

## Visual Readability

### Color Contrast

The W3C has released [guidelines on color contrast](https://www.w3.org/TR/WCAG21/%23contrast-minimum). But they're not the easiest read and having to recalculate them everytime you want to use two colors is a bit much. Luckily there's a bunch of tools to help you out. You can find a few of them below in the Resources section.

The general rules are:

|Ratio      | Use Case                                                  |
|-----------|-----------------------------------------------------------|
|< 3:1      | Purely decorative elements only                           |
|> 3:1      | Very large text and to indicate disabled/inactive states  |
|> 4.5:1    | All other text (including text in images)                 |


### Fonts Size and Zoom

There are no hard and fast rules on font sizing but what's generally considered acceptable is:

* >12pt for body text
* >9pt for footnotes and other asides

I personally tend to go for 16px as the base body font size (which is also the [default in most browsers](https://css-tricks.com/accessible-font-sizing-explained/#how-can-we-work-with-pixels)) and stick to >12px for everything else.

When setting font-sizes take care to not use the `px` unit and instead stick to [`rem` or `em`](https://j.eremy.net/confused-about-rem-and-em/). Some browsers will not respect user-set font sizing and zoom if you specify your font-size in pixels. Similarly, avoid setting a global font size as this too will override user-set font-sizing. I mean this snippet here:

```css
:root {
  font-size: 16px;
}
```

Related to this you wanna make sure that your site can be zoomed to 200% without breaking (too badly). Especially on mobile this can feel/be almost impossible but at least make sure everything is usable. People wil forgive you a weird line-break as long as the can actually read the whole text and buttons don't disappear from the screen.


### Font Family and Style

For body text, prefer sans serif fonts (Arial, Helvetica or the much hated Comic Sans) as it is more readable than serif fonts (like e.g. Times New Roman). Avoid text-decorations such as italics, underlines or capital letters. If you want to emphasize something, use bold instead. And do not use light font weights in body texts and only sparingly in headers.

When it comes to letter spacing, inter-word spacing and line height you're generally speaking well-served with the defaults. There is some science behind which spacing is best for people with dyslexia (and therefore for everyone) but the defaults tend to work well so try to not mess with them. When adjusting line-height (which, unlike the other two is done quite often), aim for around 1.5 times the font-size.


### Text formatting

You'll also want to avoid block text-alignment since that changes the letter and inter-word spacing essentially every single line making it very hard to read. Go with left or right aligned instead (depending on the writing direction in your content language). Centered alignment is alright for shorter texts (e.g headlines and sub headings) but should be avoided for long text.

Also make sure to keep the line length at around 60 - 70 characters for 'normal' body text to avoid the user getting lost trying to find the start of the next line and break up your text into paragraphs.


## Content Readability


### Language Level

Which language level you should use depends heavily on your target group. If you have a landing page for a run-of-the-mill mobile app you'll probably want to stick to a reading level around Middle School (which is kids around 14). If you target philosophy majors you can of course go with a higher level. Always keep in mind though that not everyone who's reading your text is going to be fluent in English. So try to make yourself understood with 'simple' words and short, to the point sentences. Also try to [avoid using condescending words and phrases](https://css-tricks.com/words-avoid-educational-writing/) such as 'basically, 'only', 'it's really easy'. It might not be tht simple for your reader and could make them feel stupid.

Try to stay away from abbreviations and jargon too unless you explained it first. I know what OOP is, but again, your readers might not. It stands for [object oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) by the way.


### Default Language

If you offer your site in multiple languages, do not use the user's location to decide on which language to use. Just because I'm on vacation in Spain doesn't mean I'm suddenly fluent in Spanish. Instead, use what they set in the settings. This is the snippet I tend to use:

```js
navigator.languages
    ? navigator.languages[0]
    : navigator.language || navigator.userLanguage || "en";
```

And don't forget to set the document language in your `html` wrapper tag:
```html
<html lang="en-GB">
  <!-- your site here -->
</html>
```

## Resources

* [Who Can Use](https://whocanuse.com/): Add a color combination and check what it will look like for different visual deficiencies
* [Toptal Color Blind Filter](https://www.toptal.com/designers/colorfilter): Check what whole websites look like for certain visual deficiencies
* [The Chrome Dev Tools](https://developers.google.com/web/updates/2020/03/devtools#vision-deficiencies): Amongst other things they have built-in visual deficiency simulation
* [Leonardo](https://leonardocolor.io): Generate colors based on their contrast ratio to a base color.

* [Contrast](https://usecontrast.com/) and [Contraste](https://contrasteapp.com/): Mac menu bar apps to check WCAG color contrast ratios
* [Stark](https://www.getstark.co/): A plugin for your favourite design tool (Figma, Sketch, Adobe XD)

* [Hemingway](https://hemingwayapp.com/): An online editor that checks your writing and highlights opportunities for improvement.
* [alex.js](https://alexjs.com/): JS script to catch insensitive, inconsiderate writing in your text files.
