---
title: "Why I don't like Styled Components"
date: 2020-06-27
updated: 2020-06-27
categories: web-dev react a11y
slug: "anti-styled-components"
draft: false
---

Now, I'm not telling you to never use [Styled Components](https://styled-components.com/). They do have their uses. But they also have their drawbacks, including a really big one: They make it really easy to write inaccessible code. You don't have to but it's just a lot easier. And I know that I at least tend to go the path of least resistence which is why I like to make writing inaccessible code as hard as possible.

Which is why I try to keep everyone from using styled components.


## The problem

In my experience you only really think about what html element you're gonna use once: When you define the component. And a lot of people's goto is a `div` element. So this happens quite often with a mental note of "I'll get to it later":

```javascript
export const Button = styled.div`
    color: green;
`;
```
Now when you use that button anywhere in your codebase woll you really double-check that whoever implemented the component made sure to use the right underlying html element? Probably not. And linters have issues warning you about potential a11y issues too.

```javascript
const Section = () => {
    const handleClick = () => {}

    return (
        <div>
            <Button onClick={handleClick}>
        </div>
    )
}
```

Now you've written a component with something clickable that's gonna work for people using their mouse just fine but for anyone else, clicking that button is pretty much impossible.


## Alternative

Now that we've established that we don't want to use styled components, what are the alternatives?

For one, you could write regular css like so:

```css
.button {
    color: green;
}
```

```javascript
const Section = () => {
    return (
        <div>
            <button className="button">
        </div>
    )
}
```

Or similarly, [Linaria](https://linaria.now.sh/) offers almost the same experince while still being CSS-in-JS:

```javascript
const buttonStyle = css`
    color: green;
`;

const Section = () => {
    return (
        <div>
            <button className={buttonStyle}>
        </div>
    )
}
```

[Emotion](https://emotion.sh/docs/introduction) is another option but it used the custom `css` prop to assign styles to components (although using `className` seems to be backward compatible or now):

```javascript
const buttonStyle = css`
    color: green;
`;

const Section = () => {
    return (
        <div>
            <button css={buttonStyle}>
        </div>
    )
}
```
