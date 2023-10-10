import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Offers from "./components/Offers";
import RestaurantMenu from "./components/RestaurantMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = ()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/offers",
                element: <Offers/>
            },
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ]
    },
    
])

root.render(<RouterProvider router={appRouter}/>)