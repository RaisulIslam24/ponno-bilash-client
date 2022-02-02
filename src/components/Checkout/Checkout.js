import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import Footer from "./../Footer/Footer";
import Product from "./../Product/Product";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "./../Cart/Cart";

const Checkout = () => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const history = useHistory();

  const { id } = useParams();

  const getProduct = () => {
    axios.get("http://localhost:5000/product/" + id).then((response) => {
      if (response.status === 200) {
        setProduct(response.data);
        console.log(response.data);
      }
    });
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  const handleCheckout = (id) => {
    history.push(`/shipment/${id}`);
  };

  const handleAddProduct = (product) => {
    const toBeAddedKey = product._id;
    const sameProduct = cart.find((pd) => pd._id === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd._id !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product._id, count);
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    fetch("http://localhost:5000/productsByKeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const relatedProducts = data?.filter(
          (pd) => pd.category === product.category
        );
        setProducts(relatedProducts);
        console.log(relatedProducts);
      });
  }, [product.category]);

  return (
    <>
      <div className="container bg-white py-5">
        <div className="row">
          <div className="checkout-content-div col-md-9">
            <img
              style={{ width: "20rem" }}
              src={product?.imageUrl}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1000"
            />
            <div className="checkout-details-div">
              <div>
                <h2 data-aos="fade-down" data-aos-duration="1000">
                  {product.name}
                </h2>
                <h6
                  className="text-justify"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {product?.details}
                </h6>
                <h2 data-aos="fade-up" data-aos-duration="1000">
                  Price: ৳{product?.price}
                </h2>
              </div>
              <button
                onClick={() => handleAddProduct(product)}
                className="btn btn-success"
              >
                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <Cart cart={cart}>
              <button
                onClick={() => handleCheckout(id)}
                className="main-button"
              >
                Proceed Checkout
              </button>
            </Cart>
          </div>
        </div>
        <hr />
        <h2 className="pt-2" data-aos="fade-down" data-aos-duration="1000">
          Related Products
        </h2>
        <div
          data-aos="fade-up"
          className="row row-cols-1 row-cols-md-3 px-5 py-3"
        >
          {products &&
            products.map((pd) => (
              <Product
                pd={pd}
                showAddToCart={true}
                handleAddProduct={() => handleAddProduct(pd)}
              ></Product>
            ))}
        </div>
      </div>
      <Footer className="container bg-dark" />
    </>
  );
};

export default Checkout;
