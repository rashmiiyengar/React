import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
//React Element
//jsx (transpiled before it reaches to JS Engine) -PARCEL -Babel
//JSX=> Babel transpiles it to  React.createElement=> ReactElement(JS Object) => HTMLElement(Render)

//Component Composition

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
