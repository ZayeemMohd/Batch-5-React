import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/AppLayout";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./src/components/Error";


const appRouter = createBrowserRouter([
    {
        path: "/", 
        element: <AppLayout/>,
        errorElement: <Error />
    },
    {
        path: "/contact",
        element: <Contact />
    }, 
    {
        path: "/about",
        element: <About />
    }
])


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
