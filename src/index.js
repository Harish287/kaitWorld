import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about";
import Services from "./routes/contest";
import Club from "./routes/club"
import Bronze from "./routes/club/bronze"
import Silver from "./routes/club/Silver"
import Gold from "./routes/club/Gold"
import Platinum from "./routes/club/Platinum"
import Events from "./routes/events"
import Achivers from "./routes/achivers";
import Contact from "./routes/contact";
import Gallery from "./routes/gallery";
import Contest from "./routes/contest"

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "club",
        element: <Club />,
      },
    
      {
        path: "bronze",
        element: <Bronze />,
      },
      {
        path:"events",
        element:<Events/>
      },
    {
      path:"achivers",
      element:<Achivers/>
    },
    {
      path:"contact",
      element:<Contact/>
    },{
      path:"gallery",
      element:<Gallery/>
    },{
      path:"Contest",
      element:<Contest/>
    },
    {
      path:"Silver",
      element:<Silver/>
      
    },
    {
      path:"Gold",
      element:<Gold/>
    },
    {
      path:"Platinum",
      element:<Platinum/>
    },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
