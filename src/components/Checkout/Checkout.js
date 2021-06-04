import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';

const Checkout = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleCheckout = () => {
        const orderDetails = { ...loggedInUser, product, orderTime: new Date() };

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully')
                }
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/product/' + id)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])

    return (
        <div className="container">
            <div className="shadow rounded p-5 bg-white">
                <h1>Checkout</h1>
                <br />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{product.name}</strong></td>
                            <td><strong>{product.weight}</strong></td>
                            <td><strong>1</strong></td>
                            <td><strong>${product.price}</strong></td>
                        </tr>
                        <tr>
                            <td colSpan="3"><strong>Total</strong></td>
                            <td><strong>${product.price}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <input onClick={handleCheckout} className="btn btn-success" type="submit" value="Checkout" />
        </div>
    );
};

export default Checkout;