import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AdminOrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 p-5 bg-white">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Product Owner</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Quantity</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Order Time</th>
                            </tr>
                        </thead>
                        {
                            orders.map(order =>
                                <tbody>
                                    <tr>
                                        <td>{order.displayName}</td>
                                        <td>{order.product.name}</td>
                                        <td>1</td>
                                        <td>${order.product.price}</td>
                                        <td>{(new Date(order.orderTime).toDateString('dd/MM/yyyy'))}</td>
                                    </tr>
                                </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminOrderList;