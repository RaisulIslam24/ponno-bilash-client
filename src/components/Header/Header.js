import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import header from '../../images/header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="container bg-white">
            <div className='header'>
                <div className="row d-flex align-items-center">
                    <div className="col-md-4">
                        <img src={header} alt="" />
                    </div>
                    <div className="col-md-4 input-group m-auto">
                        <input type="text" name="" id="" placeholder="Search our catalog" className="form-control w-25" />
                        <div class="input-group-append">
                            <button style={{backgroundColor: "rgb(119, 194, 7)", color: "white", border: "none", width: "40px"}} type="button"><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    </div>
                    <div className="col-md-4 d-none d-lg-block cart">
                        <a class="cart_link text-white" rel="nofollow" href="">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2"/>
                            <span class="hidden-sm-down cart_title">Cart:</span>
                            <span class="cart-products-count">
                                0<span> Products - BDT&nbsp;0</span>
                            </span>
                        </a>
                    </div>
                </div>
                <nav>
                    <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/login">
                        {loggedInUser.displayName || loggedInUser.displayName || loggedInUser.name || <span>Login</span>}
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;