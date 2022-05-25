import React, { Component } from "react";
import DropdownMenu from "../../../../../components/menu/DropDownMenu";


import './TopNavBar.css'
export default class TopNavBar extends Component {
    render(){
      return (
        <div className="topNavBar">
            
            <DropdownMenu/>
            
         
        </div>
      );
    }
 
}