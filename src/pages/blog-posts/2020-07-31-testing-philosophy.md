---
title: "My Testing Philosophy"
date: 2020-07-31
updated: 2020-07-31
categories: javascript testing
slug: "testing-philosophy"
draft: false
---

## Testing the Frontend

When it comes to testing frontend code (which is often light on business logic), the main principle is **"Always test what the user sees and can interact with"**.

Therefore the main things to test are:

- **Visible Elements**: What can the user see on the screen?
- **User Interaction**: What happens when the user clicks on something or types into a field?
- **Subscription Changes**: What happens when the app interacts with the backend? How does it react when the user changes the language?

On the more technical side, this means:

- **Render Results**: What is actually being rendered? Snapshot tests can be helpful here. But don't overdo it, since they break as soon as you change a single style value.
- **State Changes**: What do you do when your component is loading? Are there edge cases when updating state based on prop changes? How about loading errors?
- **Changing Props**: What does the component render when you pass in props? How about `null`, `undefined`, `[]`?
- **Changing Context**: How does the component react to changed context (e.g. language was switched)?

In accordance with the above principle, you should never access components by their props, state or their instance directly. Instead, simulate how the user interacts with the code. Even the `testID` should only be used very sparingly. What you should use is aria-helpers. These have the advantage of making you write accessible code in the process.

Oh, and don't shallow render your component. Ever.

## How to Test an Untested Code Base

In the best case scenario, all code is already under test. But reality is rarely the best case scenario. So, what do you test when you're looking at an untested code base? The guiding principle here is **"What would be the worst thing to break in this app?"**.

Try to narrow it down to one small ui element or flow (e.g. the 'buy' button on an ecommerce site). Then write a step-by-step manual of how to (not) use this unit (from both an end user and developer perspective) and build your test cases from there.

Generally, you want to favour a top-down approach:

1. Write an e2e test to cover the case
2. Write integration tests covering edge cases
3. Write unit tests for everything you can't cover otherwise

While writing new tests for the untested codebase, resist the urge to refactor as you go. Testing will probably take quite a while longer and will be a lot harder. But when refactoring, it is very easy to accidentally change functionality without noticing. Therefore, write comments on what to change, write an extensive test suite and the refactor after.

## On Writing Good Tests

Good tests are independent from all other tests, have a succinct, descriptive name (*does x when y*) and follow the AAA Pattern:

1. Arrange (setup the test environment)
2. Act (run the behaviour you want to assert on)
3. Assert

The test data you're using should be as realistic as possible. Try to never use the same value twice to avoid accidental greens (e.g. `buggyFuncToTest(2,2)`). In the same vein, make sure you can make your passing tests fail. Otherwise they're only giving you a false sense of security.

## On Teardowns/Setups and Test Structure

Avoid teardowns and setups (in jest called `beforeEach`/`beforeAll` and `afterEach`/`afterAll`) as much as possible. They generally just lead to hard-to-read code. And they make it really easy to accidentally write interdependent tests. The only good reason for setups is to initialize your mocks. And the only good reason to use teardowns is to clean up after tests even if they fail halfway through (e.g. clearing mocks, closing db connections).

Instead, write helper functions if you really need to. But even those should have zero side effects.

In a similar vein, don't overuse nesting in your tests. Generally, the structure should be

```js
describe("ComponentUnderTest", () => {
    it("does something", () => {})
})
```

The `describe` block is only there for prettier test output and the odd teardown and setup function. It should not contain any helpers or mocks! And don't start nesting `describe` in `describe`. If you've gotten to that point, either merge them up into one longer test or use a new test file.

Usually, you get nested `describes` because you're trying to group one use case that you've split into multiple steps. This:

```js
describe("ComponentUnderTest", () => {
 describe("to do something", () => {
     it("does a", () => {})
     it("then does b", () => {})
     it("then does c", () => {})
     it("finally does d", () => {})
 })
})
```

is just as readable if not even more so like this:

```js
describe("ComponentUnderTest", () => {
  it("does something", () => {
    // does a
    assert()

    //does b
    assert()

    //does c
    assert()

    //does d
    assert()
  })
})
```

## On Mocking

As a general rule, you shouldn't mock anything. The only exceptions are timing-related things (e.g. animations, timeouts, but also the local date) and code where you cannot guarantee the outcome of the code that's **NOT** under test. This includes API endpoints, anything user-generated and randomizers.

But when mocking all this, make sure you're testing every edge case. Be extremely paranoid. Check for flaky responses, the API response being slow, different time zones, ... And when it comes to user input: Always assume your users are both evil and stupid. Check for: Disallowed chars, huge file sizes, script injection, broken files, no files, wrong file type, ... Assume that they want to break your system.


## On what *not* to test

Generally, when in doubt, write a test. However, there are a few cases where writing tests doesn't add any extra value. Most of it comes down to: Only test code you're directly responsible for and don't test implementation details. And of course, don't test things twice. E.g. if you have e2e tests where you need to log in, write one exhaustive test covering all login cases (password correct, password is wrong, backend is down, ...) and then just call the login API directly in all the other tests.

When you write tests, focus on integration tests over unit tests. They add more value for the time invested and are pretty good at spotting the biggest source of bugs: Passing in the wrong parameters. Do write unit tests though! Especially for critical and logic-heavy code. Unit tests are great for finding bugs early and pinpointing exactly where they occur.


## References and Further Reading

Most of my testing philosophy is adapted from [Kent C Dodds'](https://kentcdodds.com/). He also has a great [Testing Javascript Course](https://testingjavascript.com/) that's worth checking out.

My current testing tech stack (for Javascript) is [jest](https://jestjs.io/) and the [testing library family](https://testing-library.com/).
