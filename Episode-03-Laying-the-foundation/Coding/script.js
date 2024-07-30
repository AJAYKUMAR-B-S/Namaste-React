import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX is HTML like Syntax
// JSX  => Parcel => babel => react.CreateElement => React.Element => JS object => HTMl Element
//This is React Element converted from JSX
const jsxHeading = (
  <h2 className="Heading" tabIndex="10">
    This is h2 by JSX
  </h2>
);

// root.render(jsxHeading); //It  returns an Object

// console.log(jsxHeading);

// Functional Component

const Heading = () => (
  <h2 className="h2">This is H2 by functional Component</h2>
);

// ^
// |
// |
//both are same
const Heading1 = () => {
  return <h2 className="h2">This is H2 by functional Component</h2>;
};

// multi line Functional Component
const Heading3 = () => {
  return (
    <div>
      <h2 className="h2">This is H2 by functional Component</h2>
    </div>
  );
};

// Component Composition

const H1heading = () => {
  return <h1>This is H1 by Component Composition</h1>;
};
const Header = () => {
  return (
    <div className="div">
      <H1heading />
      <h2 className="h2"> This is H2 by Component Composition</h2>
    </div>
  );
};
root.render(<Header />);
