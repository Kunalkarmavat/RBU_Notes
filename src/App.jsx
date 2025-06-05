import { useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Insights from "./component/Insights";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About";
// import Insights from "./component/Insights";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/about" element={<About />}/>
        
      </Routes>
      <Insights/>

    </BrowserRouter>
    </>
  );
}

export default App;
