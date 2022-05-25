import React ,{Component} from 'react';
import { Link } from "react-router-dom";
import AuthService, { LoginModel } from "../../../../services/auth/auth.service";
import '../../Auth/Auth.css';
import logo from '../../../../assets/logo.png'
import Form from '../../../../helpers/Form';
// import { useNavigate } from "react-router-dom";

class Login extends Component{
 
      private form :Form<LoginModel> = Form.create<LoginModel>({
        userName:'',
        password:''
      })
      // private navigate = useNavigate();
    async onSubmit():Promise<void> {
     
      try {
        await AuthService.login(this.form.userName,this.form.password);
       
        // this.navigate("/dashboard");
      } catch (err) {
        console.log(err);
      }
    };
    async setEmail(e:React.ChangeEvent<HTMLInputElement>){
       this.form.userName =e.target.value
    }
    async setPassword(e:React.ChangeEvent<HTMLInputElement>){
      this.form.password =e.target.value
    }
   
    render(){
    
    return(
      <div className='main'>
       
        <form className='content' onSubmit={(e)=>this.onSubmit()}>
          <img className='logo' src={logo} alt='logo'/>
          <div className='email'>
            <label>Email Address</label>
            <div >
              <input
              type="text"
              placeholder="email"
              autoComplete='on'
              onChange={(e) => this.setEmail(e)}
            
            />
            </div>
            
          </div>
          <div className='password'>
            <label>Password</label>
            <div>
            <input
            type="password"
            placeholder="password"
            autoComplete='on'
            onChange={(e) => this.setPassword(e)}
          />
            </div>
            
          </div>
         
          <button type="submit" >Login</button>
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
    
    )}
}
export default Login