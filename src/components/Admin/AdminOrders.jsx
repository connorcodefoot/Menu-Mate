import React from "react";
import AdminOrderView from "./AdminOrderView";
import 'components/Admin/AdminOrders.scss';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function AdminOrders() {

  const [isLoading, setLoading] = useState(true);
  const [orders, setOrders] = useState()

  useEffect(() => {
    axios.get('/api/admin/orders')
      .then((res) => {
        console.log(res)
        setOrders(res.data.orders)
        setLoading(false)
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
      <AdminOrderView
        key={order.orderid}
        id={order.orderid}
        table={order.table}
        customer={order.customer}
        item={order.item}
        itemPrice ={order.itemprice}
        price={order.order_total_cents}
      />
    );
  });

  return (
    <div class="admin-orders">
      {displayOrders}
    </div>
  )
}