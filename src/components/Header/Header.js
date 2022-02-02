import React, { useContext, useState } from "react";
import { Link, Router, useHistory } from "react-router-dom";
import { userContext } from "../../App";
import header from "../../images/header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import "./Header.css";

const Header = ({ setSearch }) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [searchKey, setSearchKey] = useState("");
  const history = useHistory();

  const handleSearchInput = (event) => {
    setSearchKey(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchKey.length > 0) {
      setSearch(searchKey);
      history.push(`search?q=${searchKey}`);
    }
  };

  return (
    <div className="container bg-white">
      <div className="top-header border-bottom">
        <div className="d-flex justify-content-between">
          <ul className="list-unstyled d-flex">
            <li>
              <FiPhoneCall
                style={{ color: "rgb(119, 194, 7)", marginTop: "5px" }}
              />
              <p>
                Phone: <a href="tel:01718556127">01718556127</a>
              </p>
            </li>
            <li>
              <FaRegEnvelope
                style={{ color: "rgb(119, 194, 7)", marginTop: "5px" }}
              />
              <p>
                Email: <a href="mail:01718556127">support@ponobilash.com</a>
              </p>
            </li>
          </ul>
          <div className="hideHeader">
            <p>
              Welcome,{" "}
              <span style={{ color: "rgb(119, 194, 7)" }}>
                <a href="/login"> Sign in</a>
              </span>{" "}
              or{" "}
              <span style={{ color: "rgb(119, 194, 7)" }}>
                <a href="/login">Create an account</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="middle-header">
        <div className="row d-flex align-items-center">
          <div className="col-md-4">
            <img src={header} alt="" />
          </div>
          <div className="col-md-4">
            <form onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  type="text"
                  onChange={handleSearchInput}
                  placeholder="Search our catalog"
                  className="form-control w-25"
                />
                <div class="input-group-append">
                  <button
                    style={{
                      backgroundColor: "rgb(119, 194, 7)",
                      color: "white",
                      border: "none",
                      width: "40px",
                    }}
                    type="submit"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4 d-none d-lg-block cart">
            <a class="cart_link text-white" rel="nofollow" href="">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              <span class="hidden-sm-down cart_title">Cart:</span>
              <span class="cart-products-count">
                0<span> Products - BDT&nbsp;0</span>
              </span>
            </a>
          </div>
        </div>
        <nav>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/">Categories</Link>
          <Link to="/">Products</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin">Dashboard</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
