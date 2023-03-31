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

// JSX - HTML Like code but not HTML
const jsxHeading = <h1>Hello from JSX...</h1>;

// COMPONENTS IN REACT

const Title = () => {
  return <h1>Made By Ankush Ladani</h1>;
};

const Content = () => {
  return <h1>Body Goes Here...</h1>;
};

const Footer = () => {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact Us</li>
      <li>Services</li>
    </ul>
  );
};

// <></> === React.Fragment
// For not getting extra div

const Body = () => (
  <>
    <div>
      <Title />
      <Content />
      <Footer />
    </div>
    <div>
      <h1>Second Div</h1>
    </div>
  </>
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

// root.render(<Body />);
// root.render(Body());
root.render(<Body></Body>);
