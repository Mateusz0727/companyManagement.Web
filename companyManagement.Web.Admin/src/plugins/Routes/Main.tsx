import { Routes, Route } from 'react-router-dom';

import { Component, ReactNode } from 'react';
import Login from '../../views/modules/Auth/Login/Login';
import SignUp from '../../views/modules/Auth/SignUp/SignUp';
export default class Main extends Component {
    render(): ReactNode {
        return (         
            <Routes>
            <Route path="/" element={<Login/>}>
                <Route path="signup" element={<SignUp/>}/>    
            </Route>   
                  
          </Routes>
        );
    }

}
