import React ,{useState} from 'react';
import { useNavigate,Link } from "react-router-dom";
import AuthService from "../../../../services/auth/auth.service";
import '../../Auth/Auth.css';
import logo from '../../../../assets/logo.png'

const Login= () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await AuthService.login(email, password).then(
          () => {
            navigate("/dashboard");
            window.location.reload();
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
    
    return(
     
        
    
      <div className='main'>
       
        <form onSubmit={handleLogin}className='content'>
          <img className='logo' src={logo} alt='logo'/>
          <div className='email'>
            <label>Email Address</label>
            <div >
              <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            
          </div>
          <div className='password'>
            <label>Password</label>
            <div>
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            </div>
            
          </div>
         
          <button type="submit">Login</button>
          <div className='footer'>
          <Link to={"/signup"} className="nav-link">
            Sign up
          </Link>
          <Link to={"/signup"} className="nav-link">
            Forgot password?
          </Link>
          </div>
           
        </form>
        
      </div>
    
    )
}
export default Login