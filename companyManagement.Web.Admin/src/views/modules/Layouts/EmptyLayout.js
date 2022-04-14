import React from "react";
import { Route,Routes } from "react-router";
import Profile from "../Account/Profile";
import Home from "../Dashboard/Dashboard";

const EmptyLayout = () => {
    return(
    <div >
        <Routes>
            <Route exact path="/dashboard" element={<Home/>}/>           
            <Route path="/account" element={<Profile/>}/>            
        </Routes>
    </div>
    );
}
export default EmptyLayout;