import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import List from "./pages/list/List.jsx";
import NewList from "./pages/newList/NewList.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomeAdmin from "./pages/homeAdmin/HomeAdmin";
import {useContext} from 'react'
import {AuthContext} from "./context/authContext/AuthContext";
import ListList from "./pages/listList/ListList";
function App() {
 
  const {user}= useContext(AuthContext) 
  return (
    <div className="App">
      <Router>
      <Switch>
         <Route exact path="/">
          {user? <Home/>: <Redirect to="/register"/>}
        </Route>

         <Route  path="/movies">
       { user?  <Home type="movie"/>:<Redirect to="/register"/> }
        </Route>
        <Route  path="/series">
         {user? <Home type="series"/> :<Redirect to="/register"/>}
        </Route>
        <Route  path="/watch">
         { user? <Watch/>:<Redirect to="/register"/>}
        </Route>
        <Route  path="/register">
         { !user? <Register/>: <Redirect to="/"/>}
        </Route>
         <Route  path="/login">
        { !user? <Login/> :<Redirect to="/"/>}
        </Route>
        {user &&  <>
        <Route  path="/admin">
        { user.isAdmin? <HomeAdmin/> :<Redirect to="/"/>}
        </Route>
        <Route path="/users">
          { user.isAdmin?  <UserList/>:<Redirect to="/"/>}
          </Route>
           <Route path="/newuser">
           {user.isAdmin?  <NewUser/> :<Redirect to="/"/>}
          </Route>
           <Route path="/products">
           {user.isAdmin?  <ProductList/> :<Redirect to="/"/>}
          </Route>
          <Route path="/newproduct">
           { user.isAdmin? <NewProduct/> :<Redirect to="/"/>}
          </Route>
          <Route path="/product/:productId">
           {user.isAdmin? <Product/> :<Redirect to="/"/>}
          </Route>
          <Route path="/lists">
           {user.isAdmin? <ListList/> :<Redirect to="/"/>}
          </Route>
          <Route path="/list/:listId">
              { user.isAdmin?   <List /> : <Redirect to="/"/>}
          </Route>
           <Route path="/newlist">
               {user.isAdmin? <NewList />:<Redirect to="/"/> }
           </Route>
          </>
          }
          <Route path="/user/:userId">
           { user? <User/> :<Redirect to="/"/>}
          </Route>
      </Switch>
    </Router>
    
    
    </div>
  );
}

export default App;
