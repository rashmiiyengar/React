import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//jsx (transpiled before it reaches to JS Engine) -PARCEL -Babel
//JSX=> React.createElement=> ReactElement(JS Object) => HTMLElement(Render)
const jsxHeading = (
  <div>
    <h1 className="heading1">hello</h1>
    <input type="text" />
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
    />
  </div>
)

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading)

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hello im H1"),
//     React.createElement("h2", {}, "Hello im H2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hello im H1"),
//     React.createElement("h1", {}, "Hello im H1 second"),
//   ]),
// ]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading1" },
//   "Hello World from React"
// ); //React.createElement returns an objects

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent);
// root.render(parent); //render converts heading object and converts it to h1 tag
