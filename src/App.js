import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from "./components/Admin/Admin/Admin";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import OrderList from "./components/Admin/OrderList/OrderList";
import AdminOrderList from "./components/Admin/AdminOrderList/AdminOrderList";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/checkout/:id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/AdminOrderList">
              <AdminOrderList></AdminOrderList>
            </Route>
            <Route path="/orderList">
              <OrderList></OrderList>
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
