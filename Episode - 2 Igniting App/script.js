// const root = document.getElementById('root');

// const message = document.createElement('h1' , '');

// message.innerHTML = "Namaste Duniya"

// root.appendChild(message);

// HOW TO RENDER NESTED DIV

// WAY 1

// const React = require("react");
// const ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { className: "heading", key: "2", style: { color: "red", fontSize: "3rem" } },
  "Namaste Duniya!"
);

const heading2 = React.createElement(
  "h1",
  { key: "1" },
  "Namaste React From Heading2"
);

const smallContainer = React.createElement(
  "div",
  { className: "child", key: "sm" },
  [heading, heading2]
);

// console.log(heading); // returns an object

const mainContainer = React.createElement(
  "div",
  { className: "Parent", key: "ma" },
  [smallContainer]
);

// WAY 2

const Parent = React.createElement(
  "div",
  { className: "parent" },
  React.createElement("div", { className: "child" }, [
    React.createElement(
      "h1",
      { className: "h1", style: { color: "red" } },
      "Hello React from H1"
    ),
    React.createElement(
      "h2",
      { className: "h2", style: { fontSize: "3rem" } },
      "Hello React from H2"
    ),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);

root.render(Parent);
