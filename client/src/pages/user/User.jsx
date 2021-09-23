import "./user.css"
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@material-ui/icons"
import { Link } from "react-router-dom"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
export default function User() {
    return (
            <>
    <Topbar/>
      <div className="container">
     <Sidebar className="side"/>
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newuser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Jon Doe</span>
                            <span className="userShowUserTitle">Web developer</span>

                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Accaunt Details</span>
                        <div className="userShowInfo">
                             <PermIdentity className="userShowIcon"/>
                                <span className="userShowInfoTitle">someuser99</span>
                        </div>
                         <div className="userShowInfo">
                             <CalendarToday className="userShowIcon"/>
                                <span className="userShowInfoTitle">23.12.1993</span>
                        </div>
                         <span className="userShowTitle">Contact  Details</span>

                         <div className="userShowInfo">
                             <PhoneAndroid className="userShowIcon"/>
                                <span className="userShowInfoTitle">+1 345 234 5678</span>
                        </div>

                         <div className="userShowInfo">
                             <MailOutline className="userShowIcon"/>
                                <span className="userShowInfoTitle">someuser99@gmail.com</span>
                        </div>

                         <div className="userShowInfo">
                             <LocationSearching className="userShowIcon"/>
                                <span className="userShowInfoTitle">New Yoork || USA</span>
                        </div>
                    </div>
                </div>
                {/*     RIGHT PART OF PAGE */}
                <div className="userUddate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="username">User Name</label>
                                <input type="text" className="userUpdateInput"  placeholder="username" id="username"/>


                                 <div className="userUpdateItem">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" className="userUpdateInput"  placeholder="full name" id="name"/>
                            </div>

                             <div className="userUpdateItem">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="userUpdateInput"  placeholder="email" id="email"/>
                            </div>


                             <div className="userUpdateItem">
                                <label htmlFor="phone">Phone </label>
                                <input type="text" className="userUpdateInput"  placeholder="phone number" id="phone"/>
                            </div>

                             <div className="userUpdateItem">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="userUpdateInput"  placeholder="address" id="address"/>
                            </div>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdatesIcon"/></label>
                                <input type="file" name="" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
         </div>
         </>
    )
}
