import React, { useEffect, useState } from "react";
import "./ManageSingleProduct.css";
import { Publish } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import TopBarDash from "../../TopBarDash/TopBarDash";

const ManageSingleProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [productInfo, setProductInfo] = useState({});
  const [imageUrl, setImageUrl] = useState();
  const { id } = useParams();

  const getproduct = () => {
    axios.get("http://localhost:5000/product/" + id).then((response) => {
      if (response.status === 200) {
        setProductInfo(response.data);
      }
    });
  };
  useEffect(() => {
    getproduct();
  }, [id]);

  // Upload Image to imgBB and take url
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

  // ............handle update ..........
  const onSubmit = (data) => {
    let newProductInfo = { ...productInfo };
    if (data.name) {
      newProductInfo.name = data.name;
    }
    if (data.price) {
      newProductInfo.price = data.price;
    }
    if (data.isAvailable) {
      newProductInfo.isAvailable = data.isAvailable;
    }

    if (imageUrl) {
      newProductInfo.imageUrl = imageUrl;
    }

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/updateproduct/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(newProductInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Saved!", "", "success");
            getproduct();
            reset();
          })
          .catch((err) => console.log(err));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        reset();
      }
    });
  };

  const Select = React.forwardRef(({ onChange, onBlur, name }, ref) => (
    <>
      <label>Is Product available ?</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </>
  ));

  return (
    <div className="container bg-white pt-2">
      <TopBarDash />
      <section className="product">
        <Sidebar />
        <div className="productRight border rounded p-3 bg-light shadow">
          <div className="productItemContainer">
            <h3 className="text-center">Product Information</h3>
            <Link to="/addproduct">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <div className="productTop">
            <div className="productTopRight">
              <div>
                <div className="productInfoTop">
                  <img
                    src={productInfo?.imageUrl}
                    alt={productInfo?.name}
                    className="productInfoImg"
                  />
                  <span className="productName">{productInfo?.name}</span>
                </div>
                <div className="productInfoBottom">
                  <div className="productInfoItem">
                    <span className="productInfoKey">Price:</span>
                    <span className="productInfoValue">
                      ৳{productInfo?.price}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Is Available:</span>
                    <span className="productInfoValue">
                      {productInfo?.isAvailable}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ maxWidth: "450px" }}>
                <h6>Details: </h6>
                <p>{productInfo?.details}</p>
              </div>
            </div>
          </div>

          {/* for updating data */}
          <div className="productBottom">
            <form className="productForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="productFormLeft">
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  ref={register}
                  placeholder={productInfo?.name}
                />

                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  ref={register}
                  placeholder={`৳ ${productInfo?.price}`}
                />

                <Select label="Age" name="isAvailable" ref={register} />
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img
                    src={productInfo?.imageUrl}
                    alt=""
                    className="productUploadImg"
                  />
                  <label for="file">
                    <Publish
                      className={
                        imageUrl
                          ? "productUpdateIconGreen"
                          : "productUpdateIconRed"
                      }
                    />
                  </label>
                  <input
                    type="file"
                    id="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </div>
                <button type="submit" className="productButton">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageSingleProduct;
