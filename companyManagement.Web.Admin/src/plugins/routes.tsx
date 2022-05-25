import Login from "../views/modules/Auth/Login/Login";
import Home from "../views/modules/Dashboard/Dashboard";

const router ={
    base: process.env.REACT_APP_API_URL,
    routes:[
        {
            path:"/dashboard",            
            element:<Home/>,
        },       
        {
             // Konto użytkownika
        path: 'account',
        
        children: [
            {
                path: '/profile',
                name: 'core-account-profile',
                element: Login,
            },
            {
                path: 'password',
                name: 'core-account-password',
                element: null
            },
            {
                path: 'notifications',
                name: 'core-account-notifications',
                element: null
            },
            {
                path: 'devices',
                name: 'core-account-devices',
                element: null
            }
        ]
        }
    ]
    
}