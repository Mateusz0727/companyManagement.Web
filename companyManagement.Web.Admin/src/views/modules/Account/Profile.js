import profileService from "../../../services/account/profile.service";
import React, { useState, useEffect } from "react";
import EditProfile from "./EditProfile";
const Profile = () => {
    const [profile, setProfile] = useState([]);
    const [editMode, setEditMode] = useState([]);
    useEffect(() => {
      profileService.fetch().then(
        (response) => {
            setProfile(response);
            
        },
        (error) => {
          console.log(error);
        }
      );
      setEditMode(false);
    }, []);
   
    return(
     <div>
       
       
       
       {!editMode ? (
         <div>
          { profile.isAdmin?(
              <button onClick={()=>setEditMode(true)}>przycisk</button>
          ):(
            <div></div>
          )}
        
         </div>
       ):(
         <EditProfile/>
       )}
     </div>
      
    
   
    );
}
export default Profile;