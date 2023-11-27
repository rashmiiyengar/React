import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import UserContext from "./utils/userContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//React Element
//jsx (transpiled before it reaches to JS Engine) -PARCEL -Babel
//JSX=> Babel transpiles it to  React.createElement=> ReactElement(JS Object) => HTMLElement(Render)

//Component Composition

//Chunking
//Code Splitting
//Dynamic bundling
//Lazy Loading
//On Demand Loading
//Dynamic Import

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

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
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestrauntMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
