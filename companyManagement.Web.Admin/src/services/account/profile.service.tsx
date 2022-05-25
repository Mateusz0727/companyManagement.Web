import { Resource } from "../../helpers/Interfaces";
import axios from "../../plugins/axios";
import authHeader from "../auth/auth.header";
export default class ProfileService{
    public static async fetch():Promise<Resource<ProfileModel>>{
        
        return( await (await axios.get<Promise<Resource<ProfileModel>>>("/users/profile",{headers:{Authorization:authHeader().toString()}}))).data
    }
   
}
export interface ProfileModel
{
    id:string;
    userName:string;
    fullName:string;
    FirstName:string;
    SecondNAme:string;
    PhoneNumber:string;
    PhoneNumberConfirmed:boolean;
    Email:string;
    EmailConfirmed:boolean;
    IsAdmin:boolean;
    Image:string;

}
// const fetch =()=>{
//     return axios.get(process.env.REACT_APP_API_URL+"/users/profile", { headers: authHeader() })
//     .then((response)=>{
//         if(response.data.image)
//             response.data.image = process.env.REACT_APP_ASSETS_URL+response.data.image;
//         return response.data;
//     })
// }
// const getPhoto=()=>{
    
// }
// const uploadPhoto=(files)=>{   
//     if (files.length === 0) {
//         return;
//       }
//       let fileToUpload = files;
//     const formData = new FormData();
//     formData.append('file', fileToUpload, fileToUpload.name);
//     return axios.post(process.env.REACT_APP_API_URL+"/users", formData, { headers: authHeader(),reportProgress: true, observe: 'events'})
//     .then((response)=>{
//         return process.env.REACT_APP_ASSETS_URL +response.data
//     });
// }

// const profileService={
//     fetch,
//     getPhoto,
//     uploadPhoto
// };
