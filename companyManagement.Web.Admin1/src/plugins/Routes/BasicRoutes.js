// ./PrivateRoute.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../views/modules/Dashboard/Dashboard'
import Profile from '../../views/modules/Account/Profile'

const BasicRoutes = () => {
  
  return (
    <Routes>
        <Route exact path="/dashboard" element={<Home/>}/>           
        <Route path="/account" element={<Profile/>}/>                         
    </Routes>
  )
}

export default BasicRoutes;