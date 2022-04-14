import EmptyLayout from "./EmptyLayout";
import React from "react";

import "../../../index.css"

import Sidebar from "./Navbars/SideBar/SideBar";
import TopNavBar from "./Navbars/UpBar/TopNavBar";
import './style.css'
const Default = () => {
    
    return(
    <div className="wrapper">       
        <Sidebar/>
        <div className="section">
          <TopNavBar/>
          <div className="emptyLayout">
            <EmptyLayout/>
          </div>
        </div>
    </div>
    );
}
export default Default;