import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import { createBrowserRouter } from "react-router-dom";
//React Element
//jsx (transpiled before it reaches to JS Engine) -PARCEL -Babel
//JSX=> Babel transpiles it to  React.createElement=> ReactElement(JS Object) => HTMLElement(Render)

//Component Composition

const appRouter= createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />
    },
    {
        path:"/about",
        element:<About/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
