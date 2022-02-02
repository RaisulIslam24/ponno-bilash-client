import React, { useState, forwardRef } from "react";
import "./AddProduct.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import TopBarDash from "../TopBarDash/TopBarDash";

const AddService = () => {
  const [productInfo, setProductInfo] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const history = useHistory();

  // Upload Image to imgBB and take url...
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "5fb422405e02b3782f9ac55b36d77374");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Upload product to the database..
  const onSubmit = (data) => {
    if (imageUrl) {
      const eventData = {
        name: data.name,
        imageUrl: imageUrl,
        details: data.details,
        weight: data.weight,
        price: data.price,
        category: data.category,
        isAvailable: data.isAvailable,
      };
      setProductInfo(eventData);
      const url = `http://localhost:5000/addProduct`;

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      })
        .then((response) => {
          response.json().then((res) => {
            if (response.status === 200) {
              Swal.fire({
                title: "Good job!",
                text: "Your product added!",
                icon: "success",
              }).then((result) => {
                if (result) {
                  history.push("/admin");
                }
              });
            }
            if (response.status === 401) {
              alert("data not uploaded");
            }
          });
        })
        .catch((error) => {
          console.error(error);
        });
      reset();
    } else {
      alert("please upload your product photo");
    }
  };

  console.log(productInfo);

  const Select = forwardRef(({ onChange, onBlur, name }, ref) => (
    <>
      <label>Is product available ?</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </>
  ));

  return (
    <div className="container bg-white pt-2">
      <TopBarDash />
      <section className="addProduct">
        <Sidebar />
        <div className="addProductRight border rounded p-3 bg-light shadow">
          <h4 className="text-center">Add your Product</h4>
          <form onSubmit={handleSubmit(onSubmit)} className="addProductForm">
            <div className="addProductItem">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                ref={register}
                className="form-control"
                required
              />
            </div>
            <div className="addProductItem">
              <label htmlFor="file">
                <span>Upload Product Image</span>
                <FontAwesomeIcon
                  className={
                    imageUrl ? "serviceUpdateIconGreen" : "serviceUpdateIconRed"
                  }
                  icon={faUpload}
                />
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
                id="file"
                required
              />
            </div>
            <div className="addProductItem">
              <label>Product Details</label>
              <textarea
                name="details"
                type="text"
                ref={register}
                placeholder="This product is about ..."
                rows={3}
                required
              ></textarea>
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input name="price" type="number" ref={register} required />
            </div>
            <div className="addProductItem">
              <label>Weight</label>
              <input name="weight" ref={register} required />
            </div>
            <div className="addProductItem">
              <label>Category</label>
              <input name="category" ref={register} required />
            </div>
            <div className="addProductItem">
              <Select name="isAvailable" label="Age" ref={register} />
            </div>
            <input
              className="addProductButton"
              style={{ display: imageUrl ? "block" : "none" }}
              type="submit"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddService;
