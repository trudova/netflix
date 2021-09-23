import "./widgetSm.css"
import {Visibility} from '@material-ui/icons'
import { useEffect, useState } from "react"
import {axiosInstance} from "../../config"
export default function WidgetSm() {
    const [newUsers, setNewUsers]= useState([]);

    useEffect(()=>{
const getNewUsers = async()=>{
try {
    const res = await axiosInstance.get("/users?new=true",{
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDkwNTc5MDMyYzRkZTI1ODA1OWEzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjE4MTk3NywiZXhwIjoxNjMyMzU0Nzc3fQ.pdPrUx9woUIaoucGnxdctb4BPKH8hhEQFsPhR8wmo_U"
          },
        });
        setNewUsers(res.data);
} catch (error) {
    console.log(error)
}
}
getNewUsers();
    },[]);
    return (
        <div className="widgetSm">
           <span className="widgetSmTitle">New Members</span>
           <ul className="widgetSmList">
               {newUsers.map(user =>(

              
               <li className="widgetSmListItem">
                   <img src={user.profilePic? user.profilePic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} className="widgetSmImg" alt=""/>
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername">{user.username}</span>
                   </div>
                   <button className="widgetSmButton"><Visibility className="widgetSmIcon"/>Display</button>
               </li>
             ))}
           </ul>
        </div>
    )
}
