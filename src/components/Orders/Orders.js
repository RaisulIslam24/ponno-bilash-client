import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        fetch('https://dry-lowlands-50399.herokuapp.com/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="container shadow p-5 rounded bg-white">
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
    );
};

export default Orders;