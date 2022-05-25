import React, { Component } from "react";
import AdminRoutes from "../../../plugins/Routes/AdminRoutes";
import BasicRoutes from "../../../plugins/Routes/BasicRoutes";

const AuthorizationContext  = React.createContext(false);
type IsAdminProp = {isAdmin:boolean}
class EmptyLayout extends Component<IsAdminProp> {
    
   
    render(){
        const IsAdmin = this.props.isAdmin;
        return(
            <AuthorizationContext.Provider value={IsAdmin}>
                {!!IsAdmin ? <AdminRoutes /> : <BasicRoutes />}
            </AuthorizationContext.Provider>
        );
    }
   
}
export default EmptyLayout;