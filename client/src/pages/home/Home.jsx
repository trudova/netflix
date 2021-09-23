import "./home.scss"

import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import { useEffect, useState } from "react";
// import axios from "axios";
import {axiosInstance} from "../../config"
export default function Home({type}) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(()=>{
    const getRandomeLists =async()=>{
      try {
        if(type && genre){
           const res = await axiosInstance.get(
          `/lists/?type=${type}&genre=${genre}`,{ headers:{
         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }});
    
        setLists(res.data)
        }else{
         const res = await axiosInstance.get(
          `/lists/${type? "?type="+type:""}${genre ? "?genre="+genre :""}`,{ headers:{
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }});
   
        setLists(res.data)
      }
      } catch (error) {
        console.log(error)
      }

    }
    getRandomeLists();
 
  },[type,genre]);
    return (
        <div className="home">
          <Navbar/>
        <Featured type={type} setGenre={setGenre}/>

        {lists.map((list)=>(

          <List list={list}/> 

        ))}
       
        </div>
    )
}
