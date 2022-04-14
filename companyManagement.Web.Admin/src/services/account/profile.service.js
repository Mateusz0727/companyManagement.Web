import axios from "axios";
import authHeader from "../auth/auth.header";
const fetch =()=>{
    return axios.get(process.env.REACT_APP_API_URL+"/users/profile", { headers: authHeader() })
    .then((response)=>{
        return response.data;
    })
}


const profileService={
    fetch,
};
export default profileService;