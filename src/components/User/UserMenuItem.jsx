import React from "react";

export default function UserMenuItem(props) {

  return (  
  <>
  <div class="user-menu-item">
    <div class="item-info">
      <h1>{props.title}</h1>
      <h3>{props.price / 100}</h3>
    </div>
    {props.details}
  </div>
  </>
  )
}