---
title: "Go Resources"
date: 2021-06-28
updated: 2021-06-28
categories: go
slug: "go-resources"
draft: false
---

## Documentation etc.:
* __The official Sites:__ [golang.org](https://golang.org/) and [go.dev](https://go.dev/) plus [pkg.go.dev](https://pkg.go.dev/) for package documentation
* __[Go by Example](https://gobyexample.com/):__ Documentation through examples. In my opinion much better than the official docs, even if it doesn't cover everything. 
* __[Awesome Go](https://github.com/avelino/awesome-go):__ If you're looking for a Go tool, chances are you'll find it on this list.
* __[Golang Code](https://golangcode.com/):__ Go snippets fot what feels like every usecase you can think of.

## Language Annoyance Fixes (includes mini-rants, sorry):
* __Test Assertions:__ [Testify](https://github.com/stretchr/testify). You can say what you want about "language purity" and how "the `test` package is more than enough", testify is just _the_ most comfortable way to write tests. And I'd rather use a popular, well-tested 3rd party tool than my own homebrew test helpers.
* __Linting:__ [golangci-lint](https://golangci-lint.run/). The built-in golang linter is... let's call it "not my cup of tea". And not being able to turn off rules I don't agree with makes it a huge annoyance to use in my personal projects. What might work for Google is just overkill for my 5000 line side projects.
* __Dependency Management:__ [Athens](https://gomods.io/). Dependency management in Go is a mess. That's a hill I'm very happy to die on. Centralized management pre-`go mod` was a mess and while modules fix some of the issues it also introduces a new one: Namely that your dependencies aren't saved on your machine but are fetched from the package server/your cache all the time. Which is a huge hassle when you work offline or have a slow/expensive internet connection. Athens is a workaround that will spin up a server that stores your dependencies locally.

## Tools I Use all the Time
* __GUI Development:__ [Wails](https://wails.app/). Wails is like Electron but without a whole Chromium instance (instead running on the OS' local web rendering engines)
* __Converting JSON to Go Interfaces:__ [JSON-to-Go](https://mholt.github.io/json-to-go/). Pretty much every API uses JSON to send data around and hand-typing the corresponding Go interface is a huge hassle. 
* __Creating Fake Data for Testing:__ [Gofakeit](https://github.com/brianvoe/gofakeit). What it says on the tin.



## Commands I Use all the Time/Find Useful/Forget Frequently
* __The Obvious Ones:__ `go run .`, `go build` and `go test ./...` for running, building and testing respectively
* __Module Commands:__
  * `go mod init` to initialize the current folder as a module
  * `go install path/to/dep` to install and/or update a dependency
  * `go mod tidy` to remove unused dependencies
