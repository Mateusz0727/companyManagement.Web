import React, {  Component } from "react";
import { Resource } from "../../../helpers/Interfaces";
import DashboardService, { ProfileModel } from "../../../services/dashboard/dashboard.service";
export default class Home extends Component {
  
  private items: Resource<ProfileModel>[]=[];
 
async loadData(){
  try{
   const response = await DashboardService.getAllPublicPosts();
   this.items = response.items;
  }
  catch (ex)
  {
      console.log(ex);
      this.items = [];
     
  }
}
render(): React.ReactNode {
  this.loadData();
  return (
    <div>
      
      <h3>
        {/* {users.map((item,index)=>
          <div key={index}>{item.result.email}</div>  
        )} */}
      </h3>
    </div>
  );
}
 
};

