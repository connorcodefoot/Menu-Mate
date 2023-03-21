import React from "react";

export default function AdminOrderView(props) {

  return (  
  <>
  <div class ="admin-order">
    <h1>Table {props.table}</h1>
    <h2>Customer: {props.customer}</h2>
    <h2>Price: {props.price}</h2>
    <div class ="admin-order-options">
      <form><button type="submit">Mark Paid</button></form>
      <form><button type="submit">Set to In Progress</button></form>
      <form><button type="submit">View</button></form>
    </div>
  </div>
  </>
  )
}