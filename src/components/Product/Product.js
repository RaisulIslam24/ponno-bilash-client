import React from 'react';
import { useHistory } from 'react-router';

const Product = ({ pd }) => {
    const {_id} = pd;
    const history = useHistory()

    const handleProduct = (id) => {
        history.push(`/checkout/${id}`)
    }

    return (
        <div>
            <div className="card shadow m-5">
                <img style={{ width: '200px' }} className="m-auto card-img-top"
                    src={pd.imageUrl} />
                <div className="card-body">
                    <h5 className="card-title">{pd.name} - {pd.weight}</h5>
                    <div class="card-footer d-flex justify-content-between">
                        <h3>${pd.price}</h3>
                        <button onClick={() => handleProduct(_id)} class="btn btn-success text-white"> BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;