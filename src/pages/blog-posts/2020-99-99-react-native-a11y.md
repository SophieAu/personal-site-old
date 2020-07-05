---
title: "Accessibility in React Native"
date: 2020-07-05
updated: 2020-07-05
categories: react
slug: "react-native-accessibility"
draft: false
---

Making your React Native app accessible is definitely possible. But unfortunately it involves extra effort and especially non-community maintained packages don't expose the existing built-in accessibility props forcing you to either fork the package or just build your own.

Despite that, making your app at least a little bit accessible is actually not that complicated.

## General Mobile App Rules

First off, there are some things that you need to be mindful of that are valid for mobile apps in general:

### Zoom

Just like on websites, mobile apps can be zommed in (usually through a phone-wide setting). Therefore, make sure that your app stays usable in an enlarged state. This does **NOT** mean that you can manually override the zoom settings. It means that you need to make sure that elements don't overlap or are cut off.

### Tap Area Size

A user needs to be able to reliably hit tapable elements. To achieve this, Apple recommends tap areas of at least 44x44 pixels.

### Semantic components

Just as in web development, using semantic components is going to help you a lot with accessibility.


## React Native Accessibility Props

Every core component in React Native exposes a bunch of accessibility props. 99% of the time you can get away with only using the four that I've highlighted below. And 90% of the time you only really need `accessible` and `accessibilityLabel`. To be honest, I haven't used any of the others at all.

* **accessible**
* **accessibilityLabel**
* accessibiltyHint
* accessibilityIgnoresInvertColors (iOS only)
* **accessibilityRole**
* **accessibilityState**
* accessibilityValue
* accessibilityViewIsModal (iOS only)
* accessibilityElementsHidden (iOS only)
* onAccessibilityTap
* onMagicTap (iOS only)
* onAccessibilityEscape (iOS only)
* accessibilityLiveRegion (Android only)
* ImportantForAccessibility (Android only)


### Accessible

The `accessible` prop on a component groups all children together as one selectable component. By default all `Touchable`s are accessible. The accessibility label on a component with `accessible` enabled is constructed by concatenating all children.
 
 ```js
<TouchableOpacity
  accessible={true} //this is turned on by default, so setting it here would be redundant
  onPress={_onPress}>
  <View style={styles.button}>
    <Img style={styles.buttonImage} src={rocketImage} />
    <Text style={styles.buttonText}>Go!</Text>
  </View>
</TouchableOpacity>

// Screen Reader Announcement: Go!
 ```


### AccessibilityLabel

Describes to the element what the component (and its children) contains.

When building the label, remember to use full punctuation to avoid neverending and nonsensical sentences. Also make sure that a user will understand what the element does without context.

 ```js
<TouchableOpacity
  accessible={true}
  accessibilityLabel={"Press for Liftoff"}
  onPress={_onPress}>
  <View style={styles.button}>
    <Img style={styles.buttonImage} src={rocketImage} />
    <Text style={styles.buttonText}>Go!</Text>
  </View>
</TouchableOpacity>

// Screen Reader Announcement: Press for Liftoff!
 ```

Also, when you have long lists of elements, let the user know how many of them there are and potentially mention the section the element is in.



### AccessibilityRole

There are quite a few accessibility roles that you can set. These roles (in simple terms) just add their name to the end of the screen reader announcement, letting the user know what type of element they're on.

* none (the default)
* button
* link
* search
* image
* keyboardkey
* text
* adjustable
* imagebutton
* header
* summary
* alert
* checkbox
* combobox
* combobox
* menu
* menubar
* menuitem
* progressbar
* radio
* radiogroup
* scrollbar
* spinbutton
* switch
* tab
* tablist
* timer
* toolbar


 ```js
<TouchableOpacity
  accessible={true}
  accessibilityLabel={"Press for Liftoff"}
  accessibilityRole="button"
  onPress={_onPress}>
  <View style={styles.button}>
    <Img style={styles.buttonImage} src={rocketImage} />
    <Text style={styles.buttonText}>Go!</Text>
  </View>
</TouchableOpacity>

// Screen Reader Announcement: Press for Liftoff!, button
 ```


### AccessibilityState

Accessibility states allow you inform the user of the state an element is in. The options are:

* disabled
* selected
* checked
* busy
* expanded

Make sure you set the states properly as users will otherwise be confused if e.g. a button is enabled or a checkbox is checked.

 ```js
<TouchableOpacity
  accessible={true}
  accessibilityLabel={"Press for Liftoff"}
  accessibilityRole="button"
  accessibilityState={{disabled: true}}
  onPress={_onPress}>
  <View style={styles.button}>
    <Img style={styles.buttonImage} src={rocketImage} />
    <Text style={styles.buttonText}>Go!</Text>
  </View>
</TouchableOpacity>

// Screen Reader Announcement: Press for Liftoff!, button, disabled

 ```


## Advanced Accessibility

React Native also has the [`AccessbilityInfo` API](https://reactnative.dev/docs/accessibilityinfo) which has, amongst others, these static functions:

* `isReducedMotionEnabled()`: As the name says, checks for reduced motion which you can use to toggle animations
* `isScreenReaderEnabled()`: Checks if a screen reader is enabled. Allows you to e.g. render text-alternatives to complicated graphs.
* `addEventListener(eventName, handler)` and `removeEventListener(eventName, handler)`: Lets you attach a handler and listen to changes to the state of the API functions (e.g. detects when the screen reader is turned on)
* `setAccessibilityFocus(reactTag)`: allows you to set the focus to any element with `accessible={true}`. Useful if you e.g want to set focus on a pop-up (and reset the focus after)
* `announceForAccessibility(announcement)`: Use this to announce new elements on the screen or when you're navigating away to a new screen.


## Resources

### Tools
* iOS: Accessibility Inspector: XCode -> Open Developer Tool -> Accessibility Inspector
* Android: [Google Accessibility Scanner](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor)
* Network Link Conditioner: XCode -> Open Developer Tool -> More Developer Tools...
* [FormidableLabs/eslint-plugin-react-native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y)


### More Information
* The [official docs on Accessibility](https://reactnative.dev/docs/accessibility)
* [Resource collection by Larene Le Gassick](https://medium.com/@larenelg/mobile-accessibility-resources-dab97a739080)
