import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/navbar/Navbar";
import Footer2 from "./components/Footer2/Footer2";
 






function App (){
  return (
    <main className="w-full">
      <Router>
        <Navbar/>
      <Routes>
        <Route path="/startup-plan" element={<Pages.Home />} />
        <Route path="/startup-plan/login" element={<Pages.Login />} />
        <Route path="/startup-plan/register" element={<Pages.Register />} />
        <Route path="/OurServices" element={<Pages.OurServices />} />
        <Route path="/contact-us" element={<Pages.ContactUs />} />
        
      </Routes>
      <Footer2/>
      </Router>
    </main>
    
    
    
  
  
  );
}

export default App;
