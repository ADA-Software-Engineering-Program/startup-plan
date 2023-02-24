import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import Testi from './components/Testimony/Testi';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Why from './components/Why/Why';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
      </Routes>
      <div className="myApp">
        <div>
      <Why />
      </div>
        <div>
      
      </div>
      
      <div>
      <Footer />
      </div>
      
      
      </div>
      
      
    </>
  );
}

export default App;
