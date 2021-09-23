import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {userRows} from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
export default function UserList() {
    const [data, setData]= useState(userRows);

    const handleDelete =(id)=>{
        setData(data.filter(item => item.id !==id))
    }
    const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'user', headerName: 'User', width: 200, renderCell:(params)=>{
      return (
          <div className="userListUser">
              <img src={params.row.avatar} alt="" className="userListImg"/>
              {params.row.username}
          </div>
      )
  } },
  { field: 'email', headerName: 'email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    width: 160,
   
  },
   {
    field: 'action',
    headerName: 'Action',
    width: 160,
   renderCell: (params)=>{
       return(
             
        <div className="userListActions">
            <Link to={"/user/"+params.row.id}>
            <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={()=> handleDelete(params.row.id)} />
        </div>
        
       )
   }
  },
];


    return (
          <>
    <Topbar/>
      <div className="container">
     <Sidebar className="side"/>
        <div className="userList">
             <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
     </div>
    </div>
    </>
    )
}
