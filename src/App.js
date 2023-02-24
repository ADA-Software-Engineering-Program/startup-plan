import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import Testi from './components/Testimony/Testi';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Why from './components/Why/Why';




function App() {
  return (
    <main className="w-full">
      <Routes>
        <Route path="/" element={<Pages.Home />} />
      </Routes>
    </main>
  );
}

export default App;
