import { Link, useLocation } from "react-router-dom";
import "./product.css"
import {Publish} from "@material-ui/icons"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Product() {
    const location = useLocation();
  const movie = location.movie;

    return (
        <>
        <Topbar/>
         <div className="container">
        <Sidebar className="side"/>
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link to="/newproduct" >
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={movie.img} alt=""  className="productInfoImg"/>
                        <span className="productName">{movie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id: </span>
                            <span className="productInfoValue">{movie._id} </span>
                        </div>

                         <div className="productInfoItem">
                            <span className="productInfoKey">Genre: </span>
                            <span className="productInfoValue">{movie.genre} </span>
                        </div>

                         <div className="productInfoItem">
                            <span className="productInfoKey">Year: </span>
                            <span className="productInfoValue">{movie.year} </span>
                        </div>

                         <div className="productInfoItem">
                            <span className="productInfoKey">Limit: </span>
                            <span className="productInfoValue">{movie.limit}  </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label >Movie Title</label>
                        <input type="text" name="" id=""  placeholder="movie name"/>
                        <label >Year</label>
                       <input type="text" placeholder="movie year" value={movie.year} />
                        <label >Genre</label>
                       <input type="text" value={movie.genre} placeholder="genre"/>
                        <label >Limit</label>
                       <input type="text" value={movie.limit} placeholder="age limit" />
                        <label >Trailer</label>
                       <input type="file" placeholder={movie.year} />
                        <label >Video</label>
                       <input type="file" placeholder={movie.year} />
                        
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={movie.img} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file"  id="file" style={{display: "none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
         </div>
        </>
    )
}
