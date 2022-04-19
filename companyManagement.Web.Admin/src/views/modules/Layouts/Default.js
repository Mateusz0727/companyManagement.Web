import EmptyLayout from "./EmptyLayout";
import React, { useEffect, useState } from "react";

import "../../../index.css"

import Sidebar from "./Navbars/SideBar/SideBar";
import TopNavBar from "./Navbars/UpBar/TopNavBar";
import './style.css'
import profileService from '../../../services/account/profile.service'
const Default = () => {
  const [profile, setProfile] = useState([]);
 
  useEffect(() => {
    profileService.fetch().then(
      (response) => {
          setProfile(response);
          
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
    return(
    <div className="wrapper">       
        <Sidebar/>
        <div className="section">
          <TopNavBar/>
          <div className="emptyLayout">
            <EmptyLayout IsAdmin={profile.isAdmin}/>
          </div>
        </div>
    </div>
    );
}
export default Default;