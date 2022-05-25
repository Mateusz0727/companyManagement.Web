import React from 'react';
import './App.css';
import Default from './views/modules/Layouts/Default';
import AuthService from './services/auth/auth.service';
import Main from './plugins/Routes/Main';

const App:React.FC=()=> {
  const user = AuthService.getCurrentUser();
 
  return (
    
    <div className="App">
      
     {user ? (
       <Default/>
      ) : (
       
        <div className="navbar-nav ms-auto">
         <Main/>
        </div>
      )}
       
    </div>
  );
}

export default App;
