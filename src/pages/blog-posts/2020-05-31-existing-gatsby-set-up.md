---
title: "Working on an existing Gatsby Project"
date: 2020-05-31
updated: 2020-05-31
categories: react gatsby
slug: "existing-gatsby-set-up"
draft: false
---

## The Setup

### Part 1: Installing Node.js, Gatsby and Git

Just follow [this tutorial](https://www.gatsbyjs.org/tutorial/part-zero/) that the folks at Gatsby have written up. Note that you _DO NOT_ need to set up a Gatsby project so you can skip the 'Create a Gatsby Site' step. 

If you're on Windows and want to use the Linux Subsystem (which I recommend), you can follow the [official docs on installing Node](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2).


### Part 2: Installing all the Tools

Unless you want to work exclusively on the command line, here are a few helpful tools you might need:

#### Editor

If you followed the Gatsby tutorial all the way to the end you should have already installed [VS Code](https://code.visualstudio.com/). If not, now's the time.

#### Git GUI

Git is the most fun on the command line but since that is sometimes quite a scary process, you can use [GitHub Desktop](https://desktop.github.com/).



### Part 3: Setting up GitHub and git

First up, you need to create an account at [GitHub](https://github.com). Be as creative as you want with the name but don't forget that it's publicly visible and will live for a long, long time...

Now, to be able to work with the code locally, you need to [set up git](https://help.github.com/en/github/getting-started-with-github/set-up-git) and (optionally)[GitHub Desktop](https://help.github.com/en/desktop/getting-started-with-github-desktop). If you chose to use GitHub Desktop it should set everything up for you. Or at least guide you along. It's worth it, especially if you're not 100% comfortable on the command line yet. To familiarize yourself with git, I can recommend the [Learn Git Branching tutorial](https://learngitbranching.js.org/).

Note that the following steps assume that you have GitHub Desktop installed.


### Part 4: Getting the source code (onto your machine)

Now you're all set up to work away. Except, you don't have the code yet. That can be changed quite easily. In theory you should have been given access to the repository you're going to be working on already. If not, let me (or the person who was supposed to give you aceess) know.

Once that's set up, GitHub Desktop should suggest the repo to you to clone. Either through the 'Get Started' screen or via the menu `File -> Clone Repository`. Do that and chose a location on your machine to save the repo. 


### Step 5: Getting Access and Cloning the Repo

When the repository is done cloning, navigate to it on the command line, either directly through the terminal or by opening the terminal in your code editor. You should end up in the 'root' folder (the one where you can find the files `package.json` and `package-lock.json`). Once there, install all the dependencies (plugins) the project uses. To do that, run `npm install` and be prepared to wait a few minutes. Finally, run `gatsby develop` and when you see the lines

```
You can now view <your project name here> in the browser.
⠀
  http://localhost:8000/
```

go into your web browser of choice and open the url [`localhost:8000`](localhost:8000). You should see a working version of the project there.


## Working on the code

Note that this part assumes that you have a basic understanding of git terminology. If you haven't gotten around to that yet, now's the time to do some reading :).

### Prerequisites

The code you're going to be working on is written in [React (a JavaScript framework)](https://reactjs.org/) and using [Gatsby](https://www.gatsbyjs.org/) a framework on top of React that makes it easier to create working websites (or desktop applications). Make sure to have a quick read through of the documentation to familiarize yourself with both frameworks. But don't worry too much about reading everything. Just dive into the code and learn by doing. You can't break anything and even if you did, it's easy to undo the error.

### Changing code

Ideally, you won't want to work on the master branch. Instead create a branch and work on that. Here, GitHub desktop will be able to help you again. The name you give to that branch is not very important but usually it helps to give it a name with what you're planning on doing e.g. 'add-sidebar' (so called 'feature branch').

When you're on that branch you can play around with the code as much as you want. Don't worry about breaking stuff. Run the command `npm run checks` before you do a commit which will warn you if you broke stuff. When doing commits, try to keep them as small as possible. One-line changes are valid commits! If you find yourself using 'and' in a commit message the commit is probably too big.

And don't forget to push to GitHub from time to time. You don't want your code to get lost should your machine break.

### Creating a PR

If you think you're done with the feature you've been working on, you will want to create a Pull Request (PR). This will allow you to get the changes merged into the `master` branch. Go to the repository on GitHub, go to Pull Requests and the website should walk you through the process.

The last step is making your collaborator have a look at your changes and give their 2 cents and that's it. It's not a small achievement to get everything up and running but now you're ready to build all that fancy stuff you've been dreaming about! 🎉