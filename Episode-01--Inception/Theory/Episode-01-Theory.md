## Namaste React 🚀 Course by Akshay Saini 

# Episode-01--Inception 

## Q: What is `Emmet`?
A: `Emmet` is a powerful toolkit for web developers that significantly speeds up `HTML` and `CSS` coding. It allows developers to write concise, abbreviated syntax that expands into `full-fledged` code snippets.


## Q: Difference between a `Library and Framework`?
`Library`: -Library is a `collections of prewritten code snippets` that can be used and reused to perform common tasks without having to write code from scratch.<br>
`Framework`: -A framework is a `pre-built structure` that provides a `foundation` and `guidelines` for developing software applications. It offers a set of `tools`, `libraries`, and `conventions` that define how an application should be organized and built, often controlling the overall program flow.

## Q: What is `CDN`? Why do we use it?
A: A `content delivery network (CDN)` is a group of `servers` spread across different `geographical locations` worldwide to enable the quick delivery of a `website’s content`. It is also known as a `content distribution network`.

## Q: Why is `React known as React`?
A: `React` is named React because of its ability to `react to changes in data`.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name `React` was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
`React` is a `JavaScript-based UI development library`. `Facebook` and an `open-source developer community` run it.

## Q: What is `crossorigin in script tag`?
A: The `crossorigin` attribute sets the mode of the request to an `HTTP CORS Request`.
The purpose of `crossorigin attribute` is used to share the resources from one `domain` to another `domain`. Basically, it is used to handle the `CORS` request that checks whether it is safe to allow for sharing the resources from other domains.

## Q: What is difference between `React and ReactDOM`?
`React` and `ReactDOM` are both `libraries` that are used in the development of `user interfaces`, but they serve different purposes. Here's a breakdown of the differences between the two:<br><br>
`React`:<br>
▪	`React` is the `core library` for building user `interfaces`.<br>
▪	It contains the functionality for defining and creating `React components`.<br>
▪	It provides features like `state management`, `props`, and the `component lifecycle`.<br>
▪	React can be used for both `web` and `mobile development` (React Native).

`ReactDOM`:<br>
▪	`ReactDOM` is a complementary library specifically for `web applications`.<br>
▪	It provides `DOM-specific` methods that enable `React` to interact with the `browser's DOM`.<br>
▪	It's responsible for rendering `React components` to the `DOM`.<br>
▪	It's only used in `web browser environments`.<br>

## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.
## Q: What are `async and differ` attributes in `<script>` tag?

A: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.

### _Syntax_

```js
<script async src="demo_async.js"></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.

### _Syntax_

```js
<script defer src="demo_defer.js"></script>
```
