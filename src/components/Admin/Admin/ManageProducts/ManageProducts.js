import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';


const ManageProducts = () => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        fetch('https://polar-brushlands-49945.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const deleteProduct = id => {
        fetch(`https://polar-brushlands-49945.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                const remainProducts = products.filter(product => product._id !== result)
                setProducts(remainProducts)
                alert('Product have been deleted successfully')
            })
    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 p-4 bg-white">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            orders.map(order =>
                                <tbody>
                                    <tr>
                                        <td>{order.name}</td>
                                        <td><img style={{ width: '80px' }} src={order.imageUrl} alt="" /></td>
                                        <td>$ {order.price}</td>
                                        <td><button onClick={() => deleteProduct(order._id)} className="btn btn-danger">Delete</button></td>
                                    </tr>
                                </tbody>)
                        }
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageProducts;