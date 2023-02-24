import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

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
