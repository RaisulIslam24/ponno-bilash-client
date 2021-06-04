import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Admin = () => {
    return (
        <section className="container">
            <div style={containerStyle} className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h1>Welcome to Admin Page</h1>
                </div>
            </div>
        </section>
    );
};

export default Admin;