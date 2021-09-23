import { ArrowBackOutlined } from "@material-ui/icons"
import { Link , useLocation} from "react-router-dom"
import "./watch.scss"

export default function Watch() {
    const location = useLocation();
    const movie = location.movie
    return (
        <div className="watch">
            <div className="back">
                <Link to="/" className="link">
                <ArrowBackOutlined/>
                Home
                </Link>
            </div>
            <video src={movie.video} className="video" autoPlay onProgress controls/>
        </div>
    )
}
