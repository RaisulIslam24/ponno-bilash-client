import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageUrl: imageUrl,
            weight: data.weight,
            price: data.price
        };
        const url = `http://localhost:5000/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '5fb422405e02b3782f9ac55b36d77374');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-9 shadow p-3 bg-light">
                    <div>
                        <h3>Add Product</h3>
                        <br />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>Product Name</h5>
                            <input name="name" ref={register} className="form-control" />
                            <br />
                            <h5>Weight</h5>
                            <input name="weight" ref={register} className="form-control" />
                            <br />
                            <h5>Add Price</h5>
                            <input name="price" ref={register} className="form-control" />
                            <br />
                            <input type="file" onChange={handleImageUpload} />
                            <br />
                            <br />
                            <input className="btn btn-success" type="submit" value="Save" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;