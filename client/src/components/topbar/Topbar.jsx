import "./topbar.css"
import {Language, NotificationsNone, Settings} from "@material-ui/icons"
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Administration</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">1</span>
                    </div>
                    
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">1</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings/> 
                    </div>
                    <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
