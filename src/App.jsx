import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/layouts/Home"
import Menu from "./components/layouts/Menu";

export default function App() {
  return <div className="App">
    <Header />
    <div className="container container-fluid">
      {/* <Home /> */}
      <Menu />
    </div>
    
    <Footer />
  </div>;
}
