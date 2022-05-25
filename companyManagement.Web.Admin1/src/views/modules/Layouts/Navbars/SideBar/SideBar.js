import React from "react";
import Icon, {
 
  HomeOutlined,
  MessageOutlined,
 
  UserOutlined,
} from "@ant-design/icons";
import "./Sidebar.css"
import { Link } from "react-router-dom";
export default function Sidebar() {
    function SidebarOption({ text, name,route, tag }) {
        return (
        
          <Link className="sidebar-option" to={"/"+route}>
           
              <Icon className="sidebar-icon" component={name} size="small" />
              <h2>{text}</h2>
          
          </Link>
        );
  }

  
    


  return (
    <div className="sidebar">
      <SidebarOption text="Home" name={HomeOutlined} route="dashboard" />
      <SidebarOption text="Profile" name={UserOutlined} route="account"/>
      <SidebarOption text="Messages" name={MessageOutlined} />
     
    </div>
  );
}