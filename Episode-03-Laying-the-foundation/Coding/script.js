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

const H1heading = <h1>This is H1 by Component Composition</h1>; //This is React Element

// Calling React Element inside the Function Component
const Header = () => {
  return (
    <div className="div">
      {H1heading}
      {console.log("Hello world!")}
      <h2 className="h2"> This is H2 by Component Composition</h2>
    </div>
  );
};

const h3heading = <h3>This is H3 by Functional Component</h3>;

//Adding Function Component inside the React Element
const Footer = () => {
  return (
    <div className="div">
      {h3heading}
      {console.log("Hello world!")}
      <h2 className="h2"> This is H2 by Component Composition</h2>
    </div>
  );
};

// Calling Functional Component  inside the React Element
const footerDiv = (
  <div>
    <h1>This is H1 by Component Composition</h1>
    <Footer />
  </div>
);

// Creating a infinite loop using Component And React Element

const CardContainer = () => {
  return <div className="card-Container">{card}</div>;
};

const card = (
  <div className="div">
    <h4>This is h4</h4>
    <CardContainer />
  </div>
);

root.render();
