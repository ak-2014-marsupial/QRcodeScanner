import { createHashRouter, Navigate} from "react-router-dom";
import React from "react";
import { MainPage, OrderPage, QrcodePage} from "./pages";
import {MainLayout} from "./layouts";
import {AboutPage} from "./pages/AboutPage";

// const router= createBrowserRouter([
const router= createHashRouter([
    {
        path:"",element:<MainLayout/>, children:[
            {index:true,element:<Navigate to={"qrcode"}/>},
            {path:"main",element:<MainPage/>},
            {path:"order",element:<OrderPage/>},
            {path:"qrcode",element:<QrcodePage/>},
            {path:"about",element:<AboutPage/>},

        ]
    }
])

export {
    router
}