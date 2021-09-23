import "./navbar.scss"
import {Search, Notifications, ArrowDropDown} from "@material-ui/icons"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext/AuthContext"
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll= ()=>{
        setIsScrolled(window.pageYOffset ===0 ? false: true);
        return()=>{
            window.onscroll = null
        }
    }
    const {user,dispatch} = useContext(AuthContext);
     const handleLogout =() =>{
        dispatch({type: "LOGOUT"})
     }
    return (
        <div className={isScrolled? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <Link to="/" className="link">
                    <span>Homepage</span>
                    </Link>
                       <Link to="/series" className="link">
                          <span className="navbarMainLinks" >Series</span>
                       </Link>
                          <Link to="/movies" className="link">
                             <span className="navbarMainLinks">Movies</span>
                          </Link>
                           <Link to="/" className="link">
                    <span>New and Popular</span>
                    </Link>
                    {/* <span>My list</span> */}
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />

                    <div className="profile">
                    <ArrowDropDown className="icon" />
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={handleLogout}>Logout</span>
                        {user.isAdmin? <Link to="/admin" className="link adminLink"><span>Admin</span></Link>: ""}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
