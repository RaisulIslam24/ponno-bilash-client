import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./Home.css";

const Home = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [groceries, setGroceries] = useState(true);
  const [dairy, setDairy] = useState(false);
  const [bakedGoods, setBakedGoods] = useState(false);
  const [iceCream, setIceCream] = useState(false);
  const [beverage, setBeverage] = useState(false);
  const groceriesProducts = products.filter(
    (product) => product.category === "Groceries"
  );
  const dairyProducts = products.filter(
    (product) => product.category === "Dairy"
  );
  const bakedGoodsProducts = products.filter(
    (product) => product.category === "BakedGoods"
  );
  const iceCreamProducts = products.filter(
    (product) => product.category === "Icecream"
  );
  const beverageProducts = products.filter(
    (product) => product.category === "Beverage"
  );

  const handleGroceries = () => {
    setGroceries(true);
    setDairy(false);
    setBakedGoods(false);
    setIceCream(false);
    setBeverage(false);
  };
  const handleDairy = () => {
    setDairy(true);
    setGroceries(false);
    setBakedGoods(false);
    setIceCream(false);
    setBeverage(false);
  };
  const handleBakedGoods = () => {
    setBakedGoods(true);
    setDairy(false);
    setGroceries(false);
    setIceCream(false);
    setBeverage(false);
  };
  const handleIceCream = () => {
    setIceCream(true);
    setBakedGoods(false);
    setDairy(false);
    setGroceries(false);
    setBeverage(false);
  };
  const handleBeverage = () => {
    setBeverage(true);
    setIceCream(false);
    setBakedGoods(false);
    setDairy(false);
    setGroceries(false);
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/products?search=" + search)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [search]);

  return (
    <div className="container bg-white">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://icms-image.slatic.net/images/ims-web/f124abf8-6e7e-4a1d-8e5d-8002a7f43d12.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://icms-image.slatic.net/images/ims-web/e2c2e563-f45a-45b0-9913-9c4566f6ce0a.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://icms-image.slatic.net/images/ims-web/58ff066c-cbe1-4fd7-8a41-f417614775b8.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <ul className="sidebarList">
                  <Link className="sidebarListItem link">
                    <span style={{ fontWeight: "bold" }}>Categories</span>
                  </Link>
                  <Link
                    onClick={handleGroceries}
                    className="sidebarListItem link"
                  >
                    Groceries
                  </Link>
                  <Link onClick={handleDairy} className="sidebarListItem link">
                    Dairy
                  </Link>
                  <Link
                    onClick={handleBakedGoods}
                    className="sidebarListItem link"
                  >
                    Baked goods
                  </Link>
                  <Link
                    onClick={handleIceCream}
                    className="sidebarListItem link"
                  >
                    Ice cream
                  </Link>
                  <Link
                    onClick={handleBeverage}
                    className="sidebarListItem link"
                  >
                    Beverage
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-9">
          <div className="row row-cols-1 row-cols-md-3 pt-5 pb-5">
            {products.length === 0 && (
              <div class="d-flex justify-content-center m-auto">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden"></span>
                </div>
              </div>
            )}
            {groceries &&
              groceriesProducts.map((pd) => <Product pd={pd}></Product>)}
            {dairy && dairyProducts.map((pd) => <Product pd={pd}></Product>)}
            {bakedGoods &&
              bakedGoodsProducts.map((pd) => <Product pd={pd}></Product>)}
            {iceCream &&
              iceCreamProducts.map((pd) => <Product pd={pd}></Product>)}
            {beverage &&
              beverageProducts.map((pd) => <Product pd={pd}></Product>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
