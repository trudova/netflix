import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import {axiosInstance} from "../../config"
import { useEffect, useState } from "react"
import "./featured.scss"
import {Link} from "react-router-dom";

export default function Featured({type, setGenre}) {
    const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axiosInstance.get(`/movies/random?type=${type}`, {
          headers: {
           token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  console.log(content);
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type==="movie"? "Movies": "TV Series"}
                    <select name="genre" id="genre" onChange={e=> setGenre(e.target.value)}>
                            <option >Genre</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>
                        
                    </select>
                    </span>
                </div>
            )}
            <img src={content.img} alt=""/>
            <div className="info">
                <img src={content.imgTitle} alt="" />
                <span className="desc">
                   {content.desc}
                </span>
                <div className="buttons">
                  <Link to={{ pathname: "/watch", movie: content }} className="link">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    </Link>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}
