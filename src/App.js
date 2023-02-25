import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

function App() {
  return (
    <main className="w-full">
      <Routes>
        <Route path="/startup-plan" element={<Pages.Home />} />
        <Route path="/startup-plan/login" element={<Pages.Login />} />
      </Routes>
    </main>
  );
}

export default App;
