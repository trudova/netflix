import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import {MovieContext} from "../../context/movieContext/MovieContext"
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";
export default function ProductList() {
  
     const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

    const handleDelete =(id)=>{
        deleteMovie(id, dispatch)
    };

    const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  { field: 'movie', headerName: 'Movie', width: 200, renderCell:(params)=>{
      return (
          <div className="productListItem">
              <img src={params.row.img} alt="" className="productListImg"/>
              {params.row.title}
          </div>
      )
  } },
  { field: 'genre', headerName: 'Genre', width: 200 },
  { field: 'year', headerName: 'Year', width: 200 },
  { field: 'limit', headerName: 'Limit', width: 200 },
  { field: 'isSeries', headerName: 'isSeries', width: 200 },
 
   {
    field: 'action',
    headerName: 'Action',
    width: 160,
   renderCell: (params)=>{
       return(
        <div className="userListActions">
            <Link  to={{ pathname: "/product/" + params.row._id, movie: params.row }}>
            <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline className="productListDelete" onClick={()=> handleDelete(params.row._id)} />
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
        <div className="productList">
        <DataGrid
        rows={movies}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r)=> r._id}
      />
     </div>
  </div>
</>
    )
}
