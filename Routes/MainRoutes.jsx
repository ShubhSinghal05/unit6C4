import React from "react";
import { Route,Routes } from "react-router-dom";
// import {Home} from "../components/Home";
import About from "../components/About"
// import {Home} from
import App from "../App";
import Home from "../components/Home";
import ProductsDashboard from "../components/ProductsDashboard";
import SingleProduct from "../components/SingleProduct";

export const MainRoutes = ()=>{
    return(
        <>
            <Routes>
            <Route path="/" element={<App/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products" element={<ProductsDashboard/>}/>
                <Route path="/products/:productId" element={<SingleProduct />}/>
            </Routes>
        </>
    )
}