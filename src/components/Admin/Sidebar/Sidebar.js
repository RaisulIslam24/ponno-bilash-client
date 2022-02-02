import React, { useState, useEffect, useContext } from "react";
import "./Sidebar.css";
import {
  MailOutline,
  PersonAdd,
  RateReview,
  AddShoppingCart,
  Home,
  ExitToApp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState(false);
  let history = useHistory();

  useEffect(() => {
    fetch("http://localhost:5000/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  const handleLogOut = () => {
    sessionStorage.removeItem("user");
    setLoggedInUser({});
    history.push("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          {isAdmin && (
            <>
              <h3 className="sidebarTitle">Admin Panel</h3>
              <ul className="sidebarList">
                <Link to="/adminOrderList" className="sidebarListItem link">
                  <MailOutline className="sidebarIcon" />
                  All Orders
                </Link>
                <Link to="/makeAdmin" className="sidebarListItem link">
                  <PersonAdd className="sidebarIcon" />
                  Make Admin
                </Link>
                <Link to="/addProduct" className="sidebarListItem link">
                  <AddShoppingCart className="sidebarIcon" />
                  Add Products
                </Link>
                <Link to="/reviewList" className="sidebarListItem link">
                  <RateReview className="sidebarIcon" />
                  All Reviews
                </Link>
                <Link to="/ManageProducts" className="sidebarListItem link">
                  <RateReview className="sidebarIcon" />
                  Manage Products
                </Link>
              </ul>
            </>
          )}

          {!isAdmin && (
            <>
              <h3 className="sidebarTitle">Service Taker Panel</h3>
              <ul className="sidebarList">
                <Link to="/addReview" className="sidebarListItem link">
                  <RateReview className="sidebarIcon" />
                  Add Review
                </Link>
                <Link to="/orderList" className="sidebarListItem link">
                  <MailOutline className="sidebarIcon" />
                  Order List
                </Link>
              </ul>
            </>
          )}
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/" className="sidebarListItem link active ">
              <Home className="sidebarIcon" />
              Home
            </Link>
            <li className="sidebarListItem link" onClick={handleLogOut}>
              <ExitToApp className="sidebarIcon" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
