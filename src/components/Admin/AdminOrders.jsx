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
        setOrders(res.data.orders)
        setLoading(false)
      });
  }, []);

  if (isLoading) {
    return <div> LOADING </div>
  }

  const displayOrders = orders.map((order) => {
    return (
      <AdminOrderView
        key={order.id}
        id={order.id}
        table={order.table_number}
        customer={order.customer_name}
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



