import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
      </Routes>
    </>
  );
}

export default App;
