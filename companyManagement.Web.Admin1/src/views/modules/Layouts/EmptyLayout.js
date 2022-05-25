import React, { Component } from "react";
import AdminRoutes from "../../../plugins/Routes/AdminRoutes";
import BasicRoutes from "../../../plugins/Routes/BasicRoutes";

const AuthorizationContext  = React.createContext();
class EmptyLayout extends Component {
    constructor(props) {
        super(props);
       
      }
   
    render(){
        const IsAdmin = this.props.IsAdmin;
        return(
            <AuthorizationContext.Provider value={IsAdmin}>
                {!!IsAdmin ? <AdminRoutes /> : <BasicRoutes />}
            </AuthorizationContext.Provider>
        );
    }
   
}
export default EmptyLayout;