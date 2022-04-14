import axios from "axios";
import authHeader from "./auth.header";

const login =(email,password)=>{
    return axios.post(process.env.REACT_APP_API_URL+"/auth/login",{
        email,
        password,
    })
    .then((response)=>{
        if(response.data.token){        
            localStorage.setItem("user",JSON.stringify(response.data));
        }
        return response.data;
    })
}
const signUp=(email,password,firstName,secondName)=>{
    return axios.post(process.env.REACT_APP_API_URL+"/auth/register",{
        email,
        password,
        firstName,
        secondName,
    }).then((response)=>{
        return response.data;
    })
}
const logout = () => {
    localStorage.removeItem("user");
    // axios.get(process.env.REACT_APP_API_URL+"/auth/logout",{ headers: authHeader() })
    // .then((response)=>{
    //     return response.data;
    // })
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const authService={
    login,
    logout,
    getCurrentUser,
    signUp
};
export default authService;