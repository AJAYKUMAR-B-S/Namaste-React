

# Episode-07-Finding-the-Path.   

## Q: What would happen if we do `console.log(useState())`?

A:The `useState hook` would be called and return an `array`.

- The first element `(undefined)`: This is the `initial state value`. It's `undefined` if we didn't provide an initial value to useState().
- The second element `(displayed as ƒ)`: This is the `state updating function`. It's shown as `ƒ` in the `console` to indicate it's a `function`.

## Q: What is `SPA`?

A: A `Single Page Application (SPA)` is a type of web application that `loads` and `updates` content dynamically `without refreshing the entire page`. Unlike traditional websites, SPAs use modern technologies to enhance the `user experience` by minimizing interruptions and providing a smoother interface. Users can interact with the application seamlessly, similar to using desktop software. The main advantage is the elimination of `full-page reload`s, resulting in a more responsive and engaging web experience. This is achieved by ensuring that the browser obtains all essential `HTML`, `JavaScript`, and `CSS` codes in one request or updates the necessary content based on user actions.

## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?

A: `Server-side routing` is the traditional approach used in web applications. In this method, every time a user clicks a `link` or `enters a new URL`, a request is sent to the `server`, which processes the `request` and sends back a new HTML page. The server is responsible for determining what content to display based on the URL.

### How Server-Side Routing Works:

- `User Interaction`: A user clicks a `link` or types a `URL` in the browser.
- `Request to Server`: The browser sends an `HTTP` request to the `server` for the new page.
- `Server Processes Request`: The server processes the `request`, often `fetching data` from a `database` or performing other logic.
- `Server Sends Response`: The server sends a complete `HTML page` back to the browser.
- `Browser Reloads`: The `browser reloads` and displays the new page, along with any new CSS and JavaScript files.

<br><br>

In `Client-side routing` is commonly used in modern `Single Page Applications (SPAs)`. In this approach, the `entire application` is loaded upfront, and `JavaScript` manages the navigation between different `views` or `pages` without making full `requests` to the `server` for new HTML. The browser URL changes, but the server isn't involved in loading new pages—instead, the `JavaScript code` running in the browser handles the navigation and dynamically updates the content.

### How Client-Side Routing Works:

- `Initial Load`: When the user first loads the application, the `server` sends the entire `SPA` (HTML, CSS, and JavaScript) to the `browser`.
- `User Interaction`: The user clicks a `link` or changes the URL in the browser.
- `JavaScript Handles Navigation`: JavaScript intercepts the navigation event (using the History API, for example), preventing a `full page reload`. Instead, it updates the `URL` and dynamically changes the content displayed on the page.
- `Optional Data Fetching`: If new data is needed (e.g., from an API), JavaScript `fetches` the data asynchronously and `updates the UI without reloading the page`.
