import React from "react";

export default function AdminOrderView(props) {

  return (  
  <>
  <div class ="admin-order">
    <h1>Table {props.table}</h1>
    <h2>Customer: {props.customer}</h2>
    <h2>Price: {props.price}</h2>
  </div>
  </>
  )

}