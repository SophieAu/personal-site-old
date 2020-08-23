---
title: "Replacing Switch with Object Literals"
date: 2020-08-23
updated: 2020-08-23
categories: javascript
slug: "object-literals"
draft: false
---

I've always had a bit of a strained relationship with switch-statements, especially in JavaScript. Their syntax just feels different from the rest of the language and I will always have to double-check that I didn't add too many brackets, added colons, ... For a while, the only alternative seemed to be long if-else statements which felt a bit more readable and 'familiar' but weren't great either. But then, one magical day a few months ago, my colleague at work showed me object literals and I've been spreading the gospel since.


Using the switch statement
```js
const movie = getMovie();
let bestSong;

switch (movie.title) {
  case 'moana':
    bestSong = 'We Know the Way';
  case 'lionKing':
    bestSong = 'He Lives in You';
  case 'starWars':
    bestSong = 'Cantina Band';
  default:
    bestSong = "I'll Make a Man Out of You";
}
```

Using if-else statements
```js
const movie = getMovie();
let bestSong;

if (movie.title === 'moana') {
  bestSong = 'We Know the Way';
} else if (movie.title === 'lionKing') {
  bestSong = 'He Lives in You';
} else if (movie.title === 'starWars') {
  bestSong = 'Cantina Band';
} else {
  bestSong = "I'll Make a Man Out of You";
}
```

Using an object literal
```js
const bestDisneySong = {
  moana: 'We Know the Way',
  lionKing: 'He Lives in You',
  starWars: 'Cantina Band',
  default: "I'll Make a Man Out of You",
};

const movie = getMovie();
const bestSong = bestDisneySong[movie.title] || bestDisneySong.default;
```

Now, to me, the last version is much nicer than the other two. Unfortunately TypeScript isn't happy with the `bestDisneySong[movieTitle]` part though:
```
Element implicitly has an 'any' type because expression of type 'string'
can't be used to index type '{ moana: string; lionKing: string; starWars:
string; default: string; }'.
```
Essentially, the `movieTitle` argument cannot guarantee that it only ever takes on the values `moana`, `lionKing`, `starWars`, or `default` so it won't let you use it to index the object literal. Which is understandable but annoying when you know you've added a fallback.

So, what you need to do is:
```ts
const bestDisneySong = {
  moana: 'We Know the Way',
  lionKing: 'He Lives in You',
  starWars: 'Cantina Band',
  default: "I'll Make a Man Out of You",
};

const movie = getMovie();
const bestSong =
  bestDisneySong[movie.title as keyof typeof bestDisneySong] || bestDisneySong.default;
```

The `as keyof typeof bestDisneySong` is definitely just a way to get around TypeScript's _very legitimate_ warning but since we're providing a fallback here I think it's fine. And I just dislike switch statements too much to see this as a dealbreaker.
