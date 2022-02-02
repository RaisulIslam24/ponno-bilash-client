import React, { useEffect, useState } from "react";
import "./AdminOrderList.css";
import Sidebar from "../Sidebar/Sidebar";
import TopBarDash from "../TopBarDash/TopBarDash";
import axios from "axios";
import Swal from "sweetalert2";
import SingleOrderCard from "./SingleOrderCard/SingleOrderCard";

const AdminOrderList = () => {
  const [orders, setOrders] = useState([]);
  const [ids, setIds] = useState(null);

  const getAllOrders = () => {
    axios.get("http://localhost:5000/orders").then((response) => {
      if (response.status === 200) {
        setOrders(response.data);
      }
    });
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  // Immediately delete form frontEnd
  useEffect(() => {
    setOrders(orders.filter((item) => item._id !== ids));
  }, [ids]);

  // Delete service onClick
  const deleteOrder = (id) => {
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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        setIds(id);
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {});
      }
    });
  };

  // update order status
  const handleUpdateStatus = (id, updatedStatus) => {
    const finalStatus = { status: updatedStatus };
    console.log(finalStatus);
    fetch(`http://localhost:5000/updateOrder/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Saved!", "", "success");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container bg-white pt-2">
      <TopBarDash />
      <section className="adminOrderList">
        <Sidebar />
        <div className="adminOrderListRight border rounded p-3 bg-light shadow">
          <div className="d-flex justify-content-around align-items-center flex-wrap">
            {orders.map((order) => (
              <SingleOrderCard
                key={order._id}
                order={order}
                handleUpdateStatus={handleUpdateStatus}
                deleteOrder={deleteOrder}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminOrderList;
