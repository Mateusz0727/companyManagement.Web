import EmptyLayout from "./EmptyLayout";
import React, { Component } from "react";

import "../../../index.css"


import './style.css'
import profileService, { ProfileModel } from '../../../services/account/profile.service'
import Sidebar from "./Navbars/SideBar/SideBar";
import TopNavBar from "./Navbars/UpBar/TopNavBar";
import Form from "../../../helpers/Form";
export default class Default extends Component {
    private profile:Form<ProfileModel> = Form.create<ProfileModel>({
      id:'',
      userName:'',
      fullName:'',
      FirstName:'',
      SecondNAme:'',
      PhoneNumber:'',
      PhoneNumberConfirmed:false,
      Email:'',
      EmailConfirmed:false,
      IsAdmin:false,
      Image:'',
    });
    async loadData():Promise<boolean>
    {
      try{
        const result = await profileService.fetch();
        this.profile.withData(result.result);
        return true;
      }
      catch
      {
        

      return false;
      }
    }
    render(){
      this.loadData();
      return <div className="wrapper">       
      <Sidebar/>
      <div className="section">
        <TopNavBar/>
        <div className="emptyLayout">
          <EmptyLayout isAdmin={this.profile.IsAdmin}/>
        </div>
      </div>
  </div>
    }
   
}