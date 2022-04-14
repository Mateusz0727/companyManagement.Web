import React from "react";
import Login from "./views/modules/Auth/Login/Login";
import AuthService from "./services/auth/auth.service";
import Default from "./views/modules/Layouts/Default";
import { useEffect, useState } from "react";
import SignUp from "./views/modules/Auth/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
function App(props) {
  
  
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
    <div>
    
      

      {currentUser ? (
       <Default/>
      ) : (
       
        <div className="navbar-nav ms-auto">
          <Routes>
            <Route path="/" element={<Login/>}/>   
            <Route path="/signup" element={<SignUp/>}/>           
          </Routes>
        </div>
      )}
   
   
   
  </div>
  );
}

export default App;
