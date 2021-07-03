import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const formData = {
            email: data.email
        };
        const url = `https://polar-brushlands-49945.herokuapp.com/addAnAdmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Admin added successfully')
                }
            })
    };

    return (
        <section className="container">
            <div className="row">
                <div className="col-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 p-4 pr-5 bg-white">
                    <div>
                        <h3>Make Admin</h3>
                        <br />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="email" ref={register} className="form-control" />
                            <br />
                            <input className="btn btn-success" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;