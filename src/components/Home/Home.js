import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dry-lowlands-50399.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="col-md-6 input-group m-auto pb-5">
                <input type="text" name="" id="" placeholder="Search Product" className="form-control w-25" />
                <div class="input-group-append">
                    <button type="button" class="btn btn-success" id="search-button">Search</button>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-md-3'>
                {
                    products.length === 0 &&
                    <div class="d-flex justify-content-center m-auto">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                    </div>
                }
                {
                    products.map(pd => <Product pd={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;