## Namaste React 🚀 Course by Akshay Saini

# Episode-02--Igniting-our-APP

## Q: What is `NPM`?

A: `npm` is the package manager for the Node.js JavaScript runtime environment. It is an online repository for publishing and installing packages (libraries or modules) that can be used in Node.js applications.

## Q: What is `Parcel/Webpack`? Why do we need it?

A: `Parcel/Webpack` is a popular open-source JavaScript bundlers for web applications. A bundler is a tool that takes various pieces of code, assets, and dependencies from a web application and bundles them together into a format that is optimized forward deployment on the web.

## Q: What is `.parcel-cache`?

A: The `parcel-cache` directory in Parcel is a storage location used by the Parcel bundler to cache (cache is a temporary storage for quick access to frequently used data) intermediate build results and metadata. This caching mechanism improves build performance by avoiding redundant work, allowing Parcel to quickly rebuild only the parts of the project that have changed.

## Q: What is `npx`?

A: `npx` stands for Node Package Execute and it comes with the `npm`, when we installed `npm` above 5.2.0 version then automatically `npx` will be installed. It is a `npm package runner` that can execute any package that we want from the `npm` registry without even installing that package. The `npx` is useful during a single time use package. If we have installed npm below 5.2.0 then npx is not installed in our system.

## Q: What is difference between `dependencies` vs `devDependencies`?

A: `Dependencies: -`

- `Dependencies` also known as `runtime dependencies`, are the essential packages that our `application` or `project` relies on to run correctly in a `production environment`. They are necessary for the `execution and functionality of our code`. For example, if we are building a web application using a JavaScript framework like `React`, `react` itself would be a `runtime dependency`. These `dependencies` are usually specified in a `package.json` file or an equivalent configuration file in other programming languages.
- The purpose of `runtime dependencies` is to ensure that our application has all the required `components` to work as intended. When deploying our project to a `production environment` or `sharing it with others`, these dependencies need to be installed for the code to execute correctly. `Runtime dependencies` are typically included in the `production build` or `deployed` along with our application.

### Following is the syntax for dependencies –

```
npm install <package name>
```

`Dev Dependencies: -`

- `Dev dependencies` short for `development dependencies`, are packages that are not required for the `actual execution` of our code in a `production environment`. They are used during the `development process` and help developers with tasks such as `testing`, `linting`, `bundling`, and `building the project`. Dev dependencies are not bundled or shipped with our application when it is deployed or shared.
- `Dev dependencies` include tools like `testing frameworks` (e.g., `Jest`), build tools (e.g., `Babel`, `Webpack`), and other development-specific utilities. These packages assist developers in writing `high-quality code`, `automating tasks`, and ensuring the project’s maintainability and reliability. `Dev dependencies` are typically installed during the `development phase` and are not necessary when running the project in a `production environment.`

### Following is the syntax for Dev dependencies –

```
npm install <package name> --save-dev
```

Or

```
npm install -D <package name>
```

## Q: What is `Tree Shaking`?

A: `Tree shaking` is process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

## Q: What is `Hot Module Replacement`?

A: `Hot Module Replacement`, on the other hand, is a technique that updates the application in real-time without requiring a full-page refresh.

## Q: List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.

A: `5 superpowers of Parcel`:

- `HMR (Hot Module Replacement)` - adds, or removes modules while an application is running, without a full reload.
- `File watcher algorithm` - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
- `Minification` - Minification is the process of minimizing code and markup in your web pages and script files.
- `Image optimization`
- `Caching while development`

## Q: What is `.gitignore`? What should we `add and not add` into it?

A: In `Git` to specify which files and directories should be ignored by Git. to prevent unwanted files from cluttering our Git repository and to avoid accidentally sharing sensitive information.

In our code we shouldn't add the files, which we can re-generate in future e.g, node_modules, dist etc.

## Q: What is the difference between `package.json` and `package-lock.json`?

A: `package.json`:

- The `package.json` file is in `JSON` format and it is a `metadata file` that describes the `project's dependencies`, `scripts`, `configuration`, and other details.
- It typically contains information about the project such as its `name`, `version`, `author`, and `license`. It also lists the `project's dependencies`. along with their `version numbers`, so that these `dependencies` can be automatically installed when the project is set up or updated.

`package-lock.json`:

- The `package-lock.json` is a file that is automatically generated by `npm` when a package is installed. It records the `exact version` of every installed `dependency`, including its `sub-dependencies` and their `versions`.
- The purpose of `package-lock.json` is to ensure that the same `dependencies` are installed consistently across different environments, such as `development` and `production environments`. It also helps to prevent issues with installing different package versions, which can lead to conflicts and errors.

## Q: Why should I not modify `package-lock.json`?

A: `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So we don't have to modify it, It's being handled automatically by NPM.

## Q: What is `node_modules` ? Is it a good idea to push that on git?

A: The `node_modules` directory is a folder that contains all the installed packages (dependencies) required by our project. When we use npm (Package Manager) to install packages or modules for our project, these dependencies are typically stored in the "node_modules" directory.

`Node modules are very large, so we should always include them in the `.gitignore` file.`

## Q: What is the `dist` folder?

A: The `dist` folder in React (and many other JavaScript projects) stands for "distribution". It contains the production-ready, minified, and optimized version of our application that's ready to be deployed to a web server.

## Q: What is `browserslist`?

A: The `Browserslist` package is used to define the list of target browsers and their versions that our project should support. It's a configuration file that determines which browser versions our application needs to be compatible with for CSS and JavaScript transpilation and prefixing.
It makes our code compatible for a lot of browsers.

## Q:  What is `^ caret` and `~ tilda` 
Version ranges: -
- `Npm` version are written in `0.0.0` formats, where first number (from left) stands for `major release`, second for the `minor release` and the third for the latest `patch release` of this particular version.
- When we specify the versions of our `dependencies` in the `package.json` file, we can use different `symbols` to indicate the range of acceptable versions. These symbols are:
- `~ tilde`: This means that we accept any `patch updates` within the same `minor version`. For example, `~1.4.0` means that we accept any version from `1.4.0` to `1.4.x`, but not `1.5.x` or higher.
- `^ caret`: This means that we accept any `minor` or `patch` updates within the same `major version`. For example, `^1.4.0` means that we accept any version from `1.4.0` to `1.x.x`, but not `2.x.x` or higher.
- `No symbol` before the version means the version of the package must match exactly, and should not be updated.
