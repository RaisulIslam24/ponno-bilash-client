import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faBriefcase, faPlus, faUserPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { userContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://polar-brushlands-49945.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {!isAdmin && <div>
                    <li>
                        <Link to="/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faBriefcase} /> <span>Order List</span>
                        </Link>
                    </li>
                </div>
                }
                {isAdmin && <div>
                    <li>
                        <Link to="/AdminOrderList" className="text-white">
                            <FontAwesomeIcon icon={faBriefcase} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addProduct" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageProducts" className="text-white">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Products</span>
                        </Link>
                    </li>
                </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;