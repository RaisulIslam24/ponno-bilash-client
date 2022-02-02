import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";
import "./Search.css";

const Search = () => {
  // get query string
  const params = new URLSearchParams(window.location.search);
  const search = params.get("q");
  console.log(search);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/search?q=" + search)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [search]);

  return (
    <>
      <div
        className="container bg-white py-5 pl-5"
        style={{ minHeight: "700px" }}
      >
        {products.length === 0 && (
          <div class="d-flex justify-content-center m-auto">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden"></span>
            </div>
          </div>
        )}
        <div className="d-flex flex-wrap">
          {products && products.map((pd) => <Product pd={pd}></Product>)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
