import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//React Element
//jsx (transpiled before it reaches to JS Engine) -PARCEL -Babel
//JSX=> Babel transpiles it to  React.createElement=> ReactElement(JS Object) => HTMLElement(Render)

//Component Composition

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      }, 
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestrauntMenu/>
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

