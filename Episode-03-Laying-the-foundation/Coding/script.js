import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX is HTML like Syntax
// JSX  => Parcel => babel => react.CreateElement => React.Element => JS object => HTMl Element
const jsxHeading = (
  <h2 className="Heading" tabIndex="10">
    This is h2 by JSX
  </h2>
);

root.render(jsxHeading); //It  returns an Object

console.log(jsxHeading);
