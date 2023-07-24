import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Destination from "./Components/Destination";
import Navbar from "./Components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App (){
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/Destination" element = {<Destination />} />
      <Route path="/About" element = {<About />} />
      
      
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App