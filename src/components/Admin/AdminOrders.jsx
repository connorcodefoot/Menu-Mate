import React from "react";
import AdminOrderView from "./AdminOrderView";
import 'components/Admin/AdminOrders.scss'

export default function AdminOrders() {

  const orders = [
    {
      id: 1,
      table_number: 1,
      customer_name: 'Joey',
      order_total_cents: 5000,
    },
    {
      id: 2,
      table_number: 3,
      customer_name: 'Chandler',
      order_total_cents: 7000,
    },
    {
      id: 3,
      table_nubmer: 3,
      customer_name: 'Ross',
      order_total_cents: 10000,
    },
    {
      id: 4,
      table_number: 1,
      customer_name: 'Monica',
      order_total_cents: 10000,
    }
  ]

  const displayOrders = orders.map((order) => {

    return(
      <AdminOrderView
      key={order.id}
      table={order.table_number}
      customer={order.customer_name}
      price={order.order_total_cents}
       />
    )
    })

  return (
  <div class="admin-orders">
    {displayOrders}
  </div>
  )

}