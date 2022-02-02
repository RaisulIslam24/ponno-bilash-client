import React, { useState } from "react";
import "./MakeAdmin.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import TopBarDash from "../TopBarDash/TopBarDash";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imageUrl, setImageUrl] = useState();

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

  const onSubmit = (data) => {
    if (imageUrl) {
      let newObject = { ...data };
      newObject.image = imageUrl;
      console.log(newObject);
      fetch("http://localhost:5000/addAdmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObject),
      })
        .then((response) => {
          response.json().then((res) => {
            if (response.status === 200) {
              Swal.fire({
                title: "Good job!",
                text: "Admin added!",
                icon: "success",
              }).then((result) => {
                if (result) {
                  reset();
                }
              });
            }
            if (response.status === 401) {
              alert("something went wrong.Please, try again later!");
            }
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("please upload  your service photo");
    }
  };

  return (
    <div className="container bg-white pt-2">
      <TopBarDash />
      <div className="makeAdmin">
        <Sidebar />
        <div className="makeAdminRight border rounded p-3 bg-light shadow">
          <h4 className="text-center">Make Admin</h4>
          <form onSubmit={handleSubmit(onSubmit)} className="makeAdminForm">
            <div className="makeAdminItem">
              <label>Admin Name</label>
              <input name="adminName" type="text" ref={register} required />
            </div>
            <div className="makeAdminItem">
              <label htmlFor="file">
                <span>Upload Admin Image</span>
                <FontAwesomeIcon
                  className={
                    imageUrl ? "makeAdminIconGreen" : "makeAdminIconRed"
                  }
                  icon={faUpload}
                />
              </label>
              <input
                name="adminImage"
                style={{ display: "none" }}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="file"
              />
            </div>
            <div className="makeAdminItem">
              <label>Admin Email</label>
              <input name="adminEmail" type="email" ref={register} />
            </div>
            <div className="makeAdminItem">
              <label>Phone Number</label>
              <input
                name="phoneNo"
                type="number"
                ref={register}
                placeholder="+880 1839-78735"
              />
            </div>
            <input
              className="makeAdminButton"
              style={{ display: imageUrl ? "block" : "none" }}
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
