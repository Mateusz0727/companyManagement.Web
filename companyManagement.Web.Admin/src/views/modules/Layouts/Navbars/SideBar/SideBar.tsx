import React, { ForwardRefExoticComponent } from "react";
import Icon, {
 
  HomeOutlined,
  MessageOutlined,
 
  UserOutlined,
} from "@ant-design/icons";
import "./Sidebar.css"
import { Link } from "react-router-dom";
export default function Sidebar() {
    function SidebarOption(element:SideBarInterface) {
        return (
        
          <Link className="sidebar-option" to={"/"+element.route}>
           
          
              <h2>{element.text}</h2>
          
          </Link>
        );
  }

  
    


  return (
    <div className="sidebar">
      <SidebarOption text="Home"  route="dashboard" />
      <SidebarOption text="Profile"  route="account"/>
      <SidebarOption text="Messages"  />
     
    </div>
  );
}
export interface SideBarInterface{
  text:string, name?:string,route?:string
}