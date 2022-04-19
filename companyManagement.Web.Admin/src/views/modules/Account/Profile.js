import profileService from "../../../services/account/profile.service";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import avatar from '../../../assets/avatar.png';
import Icon, {
 
  EditOutlined ,
  ArrowLeftOutlined, 
 
  
} from "@ant-design/icons";
const Profile = (props) => {
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();
   
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
   
        <div className="wrapper ">
          <div className="module-content ">

          
            <div className="profile-image">
                <img src={profile.image ? profile.image+'?'+Date.now() : avatar} alt="image"/>
              
            </div>
            <div className="profile-card">
              <div className="profile-header">
                <h2>{profile.firstName }  {profile.secondName}</h2>
                <h4>{profile.profession}Web dev</h4>
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
                      <h5>{profile.firstName}  {profile.secondName}</h5>
                    </div>
                    <div >
                      <h5>{profile.email}</h5>
                    </div>
                    <div >
                      <input type="checkbox" checked={profile.emailConfirmed}  disabled="disabled"/>
                    </div>
                    <div >
                       <h5>{profile.phoneNumber}</h5>
                    </div>                   
                    <div >
                      <input type="checkbox" checked={profile.phoneNumberConfirmed} disabled="disabled"/>
                    </div>                   
                    <div >
                      <h5>{profile.profession}</h5>
                    </div>                  
                    <div >
                      <h5>{profile.company}</h5>
                    </div>                  
                    <div >
                        <h5>{profile.about}</h5>
                    </div>
                  
                  </div>
                 
              </div>        
            </div>
          </div>
          <div className="navigate-button">
            <button onClick={()=>navigate(-1)}><Icon component={ArrowLeftOutlined} size="small" /> Back</button>
            {
              profile.isAdmin? <button onClick={()=>navigate("/account/edit")}><Icon component={EditOutlined} size="small" />Edit</button>:<div></div>          
            }
         
          </div>
        
        </div>
       
     
      
    
   
    );
}
export default Profile;