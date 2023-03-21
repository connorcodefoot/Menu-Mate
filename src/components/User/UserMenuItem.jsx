import React from "react";

export default function UserMenuItem(props) {

  return (  
  <>
  <div class="user-menu-item">
    <div class="item-info">
      <h1>{props.title}</h1>
      {props.details} 
    </div>
    <div class="item-option">
    <h3>{props.price / 100}</h3>
    <button class="add-item">+</button>
    </div>
  </div>
  </>
  )
}