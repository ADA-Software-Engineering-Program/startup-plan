
import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
 import 'bootstrap/dist/css/bootstrap.min.css'
 






function App (){
//   fetch("http://startupplanapiservice.onrender.com")
//   .then((response)=> response.json())
//   .then((json) => console.log(json))
  




  return (
    <main className="w-full">
      <Routes>
        <Route path="/startup-plan" element={<Pages.Home />} />
        <Route path="/startup-plan/login" element={<Pages.Login />} />
        <Route path="/startup-plan/register" element={<Pages.Register />} />
        <Route path="/startup-plan/OurServices" element={<Pages.OurServices />} />
      </Routes>
    </main>
    
    
    
  
  
  );
}

export default App;
