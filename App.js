// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//    [React.createElement("h1", {}, "Hello im H1"),React.createElement("h2", {}, "Hello im H2")]
//   )
// );
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello im H1"),
    React.createElement("h2", {}, "Hello im H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello im H1"),
    React.createElement("h1", {}, "Hello im H1 second"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading1" },
  "Hello World from React"
); //React.createElement returns an objects

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent); //render converts heading object and converts it to h1 tag


//tes comment