## Namaste React 🚀 Course by Akshay Saini

# Episode-05-Lets-Get-Hooked

## Q: What is the difference between `Named export`, `Default export`, and `* as export`?
## What are Exports?
In JavaScript `modules` are `individual files containing code`. This code can be `functions`, `objects`, `values`, `classes`, or `React components`. The export keyword allows these elements to be used in other JavaScript files, thus making the code reusable and modular.ES6 provides us to import & export a module and use it in other files.
### There are two main types of export in React: `named export` and `default export`.
## Default Exports
Default exports are used when a `module exports a single value` (object, function, class, etc.). This value can be `imported with any name in the importing module`.

<img src="../Assets/Picture1.png" width="350" height="250" alt="Default Exports example img">

 we can import the `ComponentA` component in another file like this:<br>
 
<img src="../Assets/Picture2.png" width="300" height="150" alt="Default Exports example img">

When we use default exports, we can name the imported thing whatever we want.

<img src="../Assets/Picture3.png" width="300" height="150" alt="Default Exports example img">

## Named Exports
`Named exports` allow us to `export` multiple `variables`, `functions`, or `classes` from a single module. Each export must be explicitly named, and the importing module must use the `same names` to access the exported values. We have to import them using `curly braces`.

<img src="../Assets/Picture4.png" width="500" height="300" alt="Named Exports example img">

To use these `functions` and `variables` in another file, we need to `import` them using the `same names` and `curly braces`:

<img src="../Assets/Picture5.png" width="600" height="100" alt="Named Exports example img">

## * as Export
The `* as` syntax in exports is used for `grouping all the named exports` from a module into a single object.

<img src="../Assets/Picture6.png" width="300" height="200" alt="* as Export example img">

<br>
<br>
<img src="../Assets/Picture7.png" width="300" height="100" alt="* as Export example img">

