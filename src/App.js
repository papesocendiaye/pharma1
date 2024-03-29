import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/product/Product";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} end/>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />

        <Route path ="/produits" element={<div><Navigation/><Product/></div>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
//TEST GIT 
