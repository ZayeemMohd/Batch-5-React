import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/AppLayout";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import Cart from "./src/components/Cart";
import Signup from "./src/components/Signup";
import Auth from "./src/components/Auth";
import Signin from "./src/components/Signin";
import RestaurantPage from "./src/components/RestaurantPage";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantPage />
      }
      ,
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "/auth/signup",
            element: <Signup />,
          },
          {
            path: "/auth/signin",
            element: <Signin />
          }
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
