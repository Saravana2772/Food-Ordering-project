import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/layouts/Home"
import Menu from "./components/layouts/Menu";

import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/eats/stores/:id/menus" element={<Menu />} />
          </Routes>
        </div>
        
        <Footer />
      </div>;
    </BrowserRouter>
  )
}
