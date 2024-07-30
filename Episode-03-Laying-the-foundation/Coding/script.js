import React from "react";
import ReactDOM from "react-dom/client";

//Revising the Episode-01 concepts

const heading = React.createElement("h2", { id: "heading" }, "This is H2");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

console.log(heading); //It  returns the Object

//JSX is HTML like Syntax
const jsxHeading = <h2 id="heading">This is h2 by JSX</h2>;

root.render(jsxHeading); //It also returns the Object

console.log(jsxHeading);
