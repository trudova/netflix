import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./homeAdmin.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useMemo, useState } from "react";
import {axiosInstance} from "../../config"
export default function HomeAdmin() {
     const MONTHS = useMemo(()=> [
   'Jan',
    'Feb',
   'Mar',
    'Apr',
   'May',
   'Jun',
   'Jul',
    'Aug',
   'Sep',
   'Oct',
  'Nov', 
  'Dec'
  ],[]
  )
  const [userStats, setUserStats]= useState([]);
  useEffect(()=>{
    const getStats = async()=>{
      try {
        const res = await axiosInstance.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDkwNTc5MDMyYzRkZTI1ODA1OWEzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjE4MTk3NywiZXhwIjoxNjMyMzU0Nzc3fQ.pdPrUx9woUIaoucGnxdctb4BPKH8hhEQFsPhR8wmo_U"
          },
        });
        const statsList = res.data.sort(function(a, b){ return a._id -b._id})
        statsList.map(item=> setUserStats( prev=>[...prev,{name: MONTHS[item._id-1], "New User": item.total}]))
      } catch (error) {
        console.log(error)
      }
    }
    getStats();
  },[MONTHS]);
  
    return (
        <>
    <Topbar/>
      <div className="container">
     <Sidebar className="side"/>
        <div className="homeAdmin">
            <FeaturedInfo/>
            <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
            <div className="adminWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
           </div>
        </div>
         </>
    )
}
