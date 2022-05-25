import axios from "../../plugins/axios";
import { Pagination, Resource } from "../../helpers/Interfaces";
import authHeader from "../auth/auth.header";

export default class DashboardService{
  public static async getAllPublicPosts():Promise<Pagination<Resource<ProfileModel>>>  {
    return( await (await axios.get<Promise<Pagination<Resource<ProfileModel>>>>("/users/all",{headers:{Authorization:authHeader().toString()}}))).data
    
  };
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

// const getAllPrivatePosts = () => {
//   return axios.get("/private", { headers: authHeader() });
// };



