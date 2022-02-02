import React, { useEffect, useState } from "react";
import "./ManageProducts.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import Sidebar from "../Sidebar/Sidebar";
import TopBarDash from "../TopBarDash/TopBarDash";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [ids, setIds] = useState(null);

  // Fetch all service
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Immediately delete form frontEnd
  useEffect(() => {
    setProducts(products.filter((item) => item._id !== ids));
  }, [ids]);

  // Delete service onClick
  const deleteProduct = (id) => {
    // Fancy pop up
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your product has been deleted.", "success");

        setIds(id);
        console.log(id, "clicked");
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
      }
    });
  };

  const columns = [
    { field: "_id", hide: true },
    {
      field: "product",
      headerName: "Product",
      editable: true,
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params?.row?.imageUrl}
              alt=""
            />
            {params?.row?.name}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      editable: true,
    },
    {
      field: "isAvailable",
      headerName: "Availability",
      width: 160,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/singleProduct/" + params?.row?._id}>
              <EditIcon className="productListEdit" />
            </Link>

            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => deleteProduct(params?.row?._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="container bg-white pt-2">
      <TopBarDash />
      <section className="productList">
        <Sidebar />
        <div className="productListRight border rounded p-3 bg-light shadow">
          <DataGrid
            className="productDataTable"
            rows={products}
            columns={columns}
            getRowId={(row) => row?._id}
            pageSize={12}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </section>
    </div>
  );
};

export default ManageProducts;
