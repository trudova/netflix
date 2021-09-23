
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.scss"
import { loginAuth } from "../../context/authContext/apiCalls"
export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const {isFetching, dispatch} = useContext(AuthContext);
const handleLogin =(e)=>{
  e.preventDefault();
  loginAuth({email, password}, dispatch)
}
  
    return (
        <div className="login">
            <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
            <div className="container">
               <form >
                   <h1>Sign In</h1>
                   <input type="email" placeholder="email or phone number" onChange={(e)=> setEmail(e.target.value)}/>
                   <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
                   <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Sign Ind</button>
                   <span>New to Netflix <b> Sign up Now</b></span>
                   <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
                   </small>

               </form>
            </div>
        </div>
    )
}
