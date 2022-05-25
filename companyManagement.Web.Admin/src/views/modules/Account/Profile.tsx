import profileService, { ProfileModel } from "../../../services/account/profile.service";
import React, { useState, useEffect, Component } from "react";

import { useNavigate } from "react-router-dom";
import avatar from '../../../assets/avatar.png';
import Icon, {
 
  EditOutlined ,
  ArrowLeftOutlined, 
 
  
} from "@ant-design/icons";
import Form from "../../../helpers/Form";
import ProfileService from "../../../services/account/profile.service";
class Profile extends Component{
    private form: Form<ProfileModel> = Form.create<ProfileModel>({
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
   
   
  
    async loadData(){
      try{
       const response = await ProfileService.fetch();
        this.form.withData(response.result);
      }
      catch (ex)
      {
          console.log(ex);
       
         
      }
    }
    render(): React.ReactNode {
      
    
    return(
   
        <div className="wrapper ">
          <div className="module-content ">

          
            <div className="profile-image">
                {/* <img src={profile.image ? profile.image+'?'+Date.now() : avatar} alt="image"/> */}
              
            </div>
            <div className="profile-card">
              <div className="profile-header">
                <h2>{this.form.firstName }  {this.form.secondName}</h2>
                <h4>{this.form.profession}Web dev</h4>
              </div>
              <div className="profile-details">
                  <div  className="headers">
                    <div >
                      <h5>Name</h5>
                    </div>
                    <div >
                      <h5>Email</h5>
                    </div>
                    <div >
                      <h5>Email Confirmed</h5>
                    </div>
                    <div >
                      <h5>Phone</h5>
                    </div>
                    <div >
                      <h5>Phone Confirmed</h5>
                    </div>
                    <div >
                      <h5>Profession</h5>
                    </div>
                    <div >
                      <h5>Company</h5>
                    </div>
                    <div >
                      <h5>About</h5>
                    </div>
                  </div>
                  <div className="profile-information">
                    <div>
                      <h5>{this.form.firstName}  {this.form.secondName}</h5>
                    </div>
                    <div >
                      <h5>{this.form.email}</h5>
                    </div>
                    <div >
                      <input type="checkbox" checked={this.form.emailConfirmed || false}  disabled={true}/>
                    </div>
                    <div >
                       <h5>{this.form.phoneNumber}</h5>
                    </div>                   
                    <div >
                      <input type="checkbox" checked={this.form.phoneNumberConfirmed || false} disabled={true}/>
                    </div>                   
                    <div >
                      <h5>{this.form.profession}</h5>
                    </div>                  
                    <div >
                      <h5>{this.form.company}</h5>
                    </div>                  
                    <div >
                        <h5>{this.form.about}</h5>
                    </div>
                  
                  </div>
                 
              </div>        
            </div>
          </div>
          <div className="navigate-button">
            {/* <button onClick={()=>navigate(-1)}><Icon component={ArrowLeftOutlined} size="small" /> Back</button>
            {
              profile.isAdmin? <button onClick={()=>navigate("/account/edit")}><Icon component={EditOutlined} size="small" />Edit</button>:<div></div>          
            }
          */}
          </div>
        
        </div>
       
     
      
    
   
    );
}
}
export default Profile;