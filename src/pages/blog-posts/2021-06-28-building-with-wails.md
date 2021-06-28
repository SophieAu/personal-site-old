---
title: "Building a GUI App Using Go and Svelte"
date: 2021-06-28
updated: 2021-06-28
categories: go, svelte
slug: "building-with-wails"
draft: false
---
> This post is a very high-level overview only. To get more of a detailed insight into how to build an app using Wails, check out the [source code of the Imperial Splendour Launcher](https://github.com/SophieAu/imperial-splendour-launcher/tree/master/launcher)

Despite my dislike of the [Go programming Language](https://golang.org/) for various reasons (which could be a whole post in itself) I recently decided to use it to build a cross-platform GUI app. It just seemed like the best option to me:
* type-safe
* allows cross-compilation
* small footprint
* great ecosystem

And most importantly: [Wails](https://wails.app/) is a golang app and was exactly what I was looking for. Here's what it does, taken straight from their homepag:
> The traditional method of providing web interfaces to Go programs is via a built-in web server. Wails offers a different approach: it provides the ability to wrap both Go code and a web frontend into a single binary. The Wails cli makes this easy for you, by handling project creation, compilation and bundling. All you have to do is get creative!

Translated for JavaScript folks like me: It's a bit like [Electron](https://www.electronjs.org/) but doesn't bring a whole Chromium instance along and runs on a Go backend.


## Setting up the App
Wails comes with a few templates so setting up a new project is a very hands-off experience. I recommend just following the [official docs](https://wails.app/gettingstarted/) on getting the basic setup going. Chose the Svelte template if you want to follow this tutorial. Most of the advice is universal to whatever frontend framework you chose though.

To set up TypeScript support in the Svelte frontend, the Svelte maintainers wrote up a guide in the [TypeScript support release post](https://svelte.dev/blog/svelte-and-typescript).


## Building and Testing the Backend

NOTE: This part assumes you've initialized a project and followed the setup steps above. Most of the examples are taken directly from the code for the [Imperial Splendour Launcher](https://github.com/SophieAu/imperial-splendour-launcher/tree/master/launcher) I built recently.


Independent of how small your app will be, I highly recommend putting all the backend logic into a separate package and only doing the most basic Wails setup in the `main.go` file. This makes testing a lot easier later on. I also like creating a file each for the various endpoints. My file structure will therefore look like this:


```
main.go
backend/
- customErrors/
  - errors.go
- mocks/
  - mocks.go
- test/
  - helpers.go
- a_api.go
- a_constants.go
- a_interfaces.go
- a_systemHandler.go
- EndpointOne.go
- EndpointOne_test.go
- EndpointTwo.go
- EndpointTwo_test.go
- WailsInit.go
- WailsInit_test.go
- WailsShutdown.go
- WailsShutdown_test.go
```

The `a_` prefix is purely for aesthetic reasons because it neatly separates the endpoint functions from the internals. And my `main.go` file looks like this:

```go
package main

import (
	_ "embed"
	"my-app-name/backend"

	"github.com/wailsapp/wails"
)

//go:embed frontend/public/build/bundle.js
var js string

//go:embed frontend/public/build/bundle.css
var css string

func main() {
	app := wails.CreateApp(&wails.AppConfig{
		Width:            backend.AppWidth,
		Height:           backend.AppHeight,
		Resizable:        false,
		Title:            backend.AppTitle,
		JS:               js,
		CSS:              css,
		DisableInspector: true,
	})

	app.Bind(&backend.API{})
	_ = app.Run()
}
```

To take full advantage of the decoupling, don't use the 'built-on' Wails runtime instances or file system calls in your app but instead pass new ones in on launch:

```go
// WailsInit.go

package backend

import (
	"github.com/wailsapp/wails"
)

func (a *API) Init(browser Browser, window Window, logger Logger, store Store, dialog Dialog, systemHandler Handler) error {
	a.browser = browser
	a.window = window
	a.logger = logger
	a.dialog = dialog
	a.Sh = systemHandler
	a.logStore = store

	return nil
}

func (a *API) WailsInit(runtime *wails.Runtime) error {
	return a.Init(runtime.Browser, runtime.Window, runtime.Log.New("API"), runtime.Store.New("Store", []string{}), runtime.Dialog, &SystemHandler{})
}
```

Decoupling all of these does make the app quite a bit more brittle since you'll just be assuming how the internals of Wails and the file system work but testing without mocking is a lot more involved and you generally speaking assume that your dependencies work as documented so, at least for me, the upsides of mocking overrode the downsides.

Now, when testing I only ever run the `Init` function, not the `WailsInit` which makes it simple to pass in the mocked Wails runtime elements and the `SystemHandler` which is my custom system abstraction (can be found in `a_systemHandler.go`).


## Building and Testing the Frontend

The frontend works pretty much the same as the backend, at least structurally. There is one `Root.svelte` file which is the counterpart to the `main.go` and the actual logic is happening elsewhere.

```html
<script lang="ts">
  import App from './App.svelte';
  import type { APIType } from '../types';
  import runtime from '@wailsapp/runtime';

  const API = (window as any)?.backend?.API as APIType;
  const Store = runtime.Store.New('Log');
</script>

<div>
  <App {API} {Store} />
</div>

<style>
  :global(:root) {
    font-size: 16px;
    font-family: system;
  }

  :global(body) {
    overflow: hidden;
    margin: 0;
    height: 26.25rem;
    width: 33.75rem;
  }
</style>
```

Since `Root.svelte` is only a dumb wrapper component we don't need to test it and to test `App.svelte` we can pass in our own API mock.
