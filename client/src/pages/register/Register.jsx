import {axiosInstance} from "../../config"
import { useRef, useState } from "react"
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./register.scss"

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const emailRef = useRef();
    const passwordlRef = useRef();
    const usernameRef = useRef();
    const history = useHistory();
    const handleStart=()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = async(e)=>{
        e.preventDefault()
        setPassword(passwordlRef.current.value);
        setUsername(usernameRef.current.value)

    try {
         await axiosInstance.post("/auth/register", {email, username,  password})
         history.push("/login")
    } catch (error) {
        console.log(error);
    }
     
    }
    return (
        <div className="register">
            <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
         <button className="loginButton"><Link to="/login" className="link">Sign In</Link></button>
        </div>
      </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                 <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>
                    Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    {!email ? (
                    <div className="input">
                        <input type="email" placeholder="email address" ref={emailRef}/>
                        <button className="registerButton" onClick={handleStart}> Get started</button>
                    </div>
                    ):(
                        <form className="input">
                        <input type="text" placeholder="username" ref={usernameRef}/>
                        <input type="password" placeholder="password" ref={passwordlRef}/>
                        <button className="registerButton" onClick={handleFinish}> Start mambership</button>
                    </form>
                    )}
            </div>
        </div>
    )
}
