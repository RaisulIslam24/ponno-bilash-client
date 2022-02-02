import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from "./components/Admin/Dashboard/Dashboard";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import OrderList from "./components/Admin/OrderList/OrderList";
import AdminOrderList from "./components/Admin/AdminOrderList/AdminOrderList";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageProducts from "./components/Admin/ManageProducts/ManageProducts";
import LandingPage from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import ReviewList from "./components/Admin/ReviewList/ReviewList";
import AddReview from "./components/Admin/AddReview/AddReview";
import Shipment from "./components/Shipment/Shipment";
import ManageSingleProduct from "./components/Admin/ManageProducts/ManageSingleProduct/ManageSingleProduct";
import Search from "./components/Search/Search";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header setSearch={setSearch} />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout/:id">
              <Checkout />
            </Route>
            <PrivateRoute path="/shipment/:id">
              <Shipment />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/adminOrderList">
              <AdminOrderList />
            </PrivateRoute>
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/orderList">
              <OrderList />
            </PrivateRoute>
            <PrivateRoute path="/orderList">
              <OrderList />
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/addProduct">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/addReview">
              <AddReview />
            </PrivateRoute>
            <PrivateRoute path="/orderList">
              <OrderList />
            </PrivateRoute>
            <PrivateRoute path="/reviewList">
              <ReviewList />
            </PrivateRoute>
            <PrivateRoute path="/ManageProducts">
              <ManageProducts />
            </PrivateRoute>
            <PrivateRoute path="/singleProduct/:id">
              <ManageSingleProduct />
            </PrivateRoute>
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
