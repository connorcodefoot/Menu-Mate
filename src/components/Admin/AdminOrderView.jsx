import React from "react";

export default function AdminOrderView(props) {

  return (  
  <>
  <div class ="admin-order">
    <div class="order-info">
      <h4>Order #{props.id}</h4>
      <h4>Customer: {props.customer}</h4>
    </div>
    <div class="order-items">
      <h5>{props.item}</h5>
      <h5>${props.itemPrice / 100}</h5>
    </div>
    <div class ="admin-order-options">
      <form><button type="submit">Mark Paid</button></form>
      <form><button type="submit">Set to In Progress</button></form>
      <form><button type="submit">View</button></form>
    </div>
  </div>
  </>
  )
}