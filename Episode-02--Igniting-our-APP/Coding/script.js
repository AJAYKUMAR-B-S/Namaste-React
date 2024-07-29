import React from "react";
import ReactDOM from "react-dom/client";

{
  /* <div class="parentDiv">
  <div class="childDiv1">
    <h1 class="heading1">I am h1</h1>
    <h2 class="heading2">I am h2</h2>
  </div>
  <div class="childDiv1">
    <h1 class="heading1">I am h1</h1>
    <h2 class="heading2">I am h2</h2>
  </div>
  </div> 
  */
}

const parentDiv = React.createElement(
  "div",
  { id: "parentDiv" },
  React.createElement("div", { id: "childDiv1" }, [
    React.createElement("h1", { id: "heading1" }, "I am h1"),
    React.createElement("h2", { id: "heading2" }, "I am h2"),
  ]),
  React.createElement("div", { id: "childDiv2" }, [
    React.createElement("h3", { id: "heading3" }, "I am h3"),
    React.createElement("h4", { id: "heading4" }, "I am h4"),
  ])
);

console.log(parentDiv);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

console.log(heading); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
