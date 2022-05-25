import axios from "axios";
import authHeader from "../auth/auth.header";


const getAllPublicPosts = () => {

  return axios.get(process.env.REACT_APP_API_URL + "/users/all",{ headers: authHeader() });
};

const getAllPrivatePosts = () => {
  return axios.get(process.env.REACT_APP_API_URL + "/private", { headers: authHeader() });
};

const DashboardService = {
  getAllPublicPosts,
  getAllPrivatePosts,
};

export default DashboardService;