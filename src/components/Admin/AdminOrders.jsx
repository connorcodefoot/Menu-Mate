import React from "react";
import AdminOrderView from "./AdminOrderView";
import 'components/Admin/AdminOrders.scss';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function AdminOrders() {

  const [isLoading, setLoading] = useState(true);
  const [orders, setOrders] = useState();

  useEffect(() => {
    axios.get('/api/admin/orders')
      .then((res) => {
        console.log(res.data.data.rows);
        setOrders(res.data.data.rows);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Add the home-background class to the body element (this is being used for background color on home page without affecting other pages)
    document.body.classList.add("admin-background");

    // Remove the home-background class when component unmounts
    return () => {
      document.body.classList.remove("admin-background");
    };
  }, []);

  if (isLoading) {
    return <div class="admin-loading"> LOADING </div>
  }

  const displayOrders = orders.map((order) => {

    return (
      <>
        <div class="admin-orders">
          <div class="admin-order">
          <div class="order-info">
            <h3>{order.customer_name}</h3>
            <h3>{order.id}</h3>
          </div>
          <AdminOrderView
            id={order.id}
          />
            <div>
          Total: {order.order_total_cents}
            </div>
          <div class="admin-order-options">
            <form><button type="submit">Mark Paid</button></form>
            <form><button type="submit">Set to In Progress</button></form>
            <form><button type="submit">View</button></form>
          </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
    { displayOrders }
    </>
  );
}



