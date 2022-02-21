import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Product from "./Product";
import About from "./about";
import {BrowserRouter, Navigate,Route,Routes} from 'react-router-dom';

function Main (){
    return(
        <div>
        <Header/>
        
        <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="*" element={<Navigate to="/home"/>}> </Route>
        </Routes>
        </BrowserRouter>
        <br/>
        <Footer/>
        </div>
    )      
}

export default Main