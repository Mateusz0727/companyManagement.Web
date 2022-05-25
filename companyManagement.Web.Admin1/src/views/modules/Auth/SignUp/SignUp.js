import React ,{useState} from 'react';
import authService from '../../../../services/auth/auth.service';
import { Link, useNavigate } from "react-router-dom";
import '../../Auth/Auth.css';


const SignUp=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const navigate = useNavigate();
    const handleSignUp = async(e)=>{
        e.preventDefault();
        try{
            await authService.signUp(email,password,firstName,secondName).then(
                ()=>{
                    navigate("/login");
                    window.location.reload();
                }
                )
            
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <div className='main'>
            <form onSubmit={handleSignUp} className='content'>
            
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
                <div className='user-info'>
                    <div className='firstName'>
                        <label>First Name</label>
                        <div >
                            <input
                            type="text"
                            placeholder="first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                    
                    </div>
                    <div className='secondName'>
                        <label>Second Name</label>
                        <div >
                            <input
                            type="text"
                            placeholder="second name"
                            value={secondName}
                            onChange={(e) => setSecondName(e.target.value)}
                            />
                        </div>
                    
                    </div>
                </div>
                
            
                <button type="submit">Sign up</button>
                <div className='footer'>
                    <Link to={"/"} className="nav-link">
                        Login
                    </Link>
                    
                </div>
            </form>
        </div>
    )
}
export default SignUp