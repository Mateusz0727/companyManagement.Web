import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Profile from '../../views/modules/Account/Profile'
import Home from '../../views/modules/Dashboard/Dashboard'
import EditProfile from '../../views/modules/Account/EditProfile'

const AdminRoutes = () => {
  
  return (
    <Routes>
        <Route  path="/dashboard" element={<Home/>}/>           
        <Route path="/account" element={<Profile/>}/>             
        <Route path="/account/edit" element={<EditProfile/>}/>          
    </Routes>
  )
}

export default AdminRoutes;