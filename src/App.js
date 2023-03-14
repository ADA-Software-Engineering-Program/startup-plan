import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css'
 






function App (){
  return (
    <main className="w-full">
      <Routes>
        <Route path="/startup-plan" element={<Pages.Home />} />
        <Route path="/startup-plan/login" element={<Pages.Login />} />
        <Route path="/startup-plan/register" element={<Pages.Register />} />
        <Route path="/OurServices" element={<Pages.OurServices />} />
        <Route path="/contact-us" element={<Pages.ContactUs />} />
        
      </Routes>
    </main>
    
    
    
  
  
  );
}

export default App;
