import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import profileService from "../../../services/account/profile.service";
import avatar from '../../../assets/avatar.png';
import './Profile.css';

const EditProfile = () => {

    // const [profileImage, setProfileImage] = useState(null);
    // const [profile, setProfile] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      // profileService.fetch().then(
      //   (response) => {
      //       setProfile(response);
      //       setProfileImage(response.image)
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );
    }, []);
    const saveAndBack=async()=>{
        try {
            // await profileService.fetch.then(
            //   () => {
            //     navigate("/dashboard");
            //     window.location.reload();
            //   },
            //   (error) => {
            //     console.log(error);
            //   }
            // );
          } catch (err) {
            console.log(err);
          }
    }
    // const uploadPhoto=(e)=>{
    
    //   profileService.uploadPhoto(e.target.files[0])
    //   .then(
    //     (response)=>{
    //       setProfileImage(response+'?'+Date.now());          
    //     },
    //     (error) => {
    //           console.log(error);
    //     });
    // }
return(
  
    <div className="wrapper">
      <div className="module-content">
          <form> 
            <label>
              {/* <img  src={profileImage ? profileImage+'?'+Date.now() : avatar} id="profile" alt="image"/>
           */}
              {/* <input type="file"  placeholder="Choose file" onChange={uploadPhoto }   /> */}
            </label>
          </form>
      </div>
          
           <div className="navigate-button">
            <button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={()=>navigate("/account")}>Save</button>
            <button onClick={()=>saveAndBack()}>Save and back</button>
           </div>
         </div>
)
}
export default EditProfile