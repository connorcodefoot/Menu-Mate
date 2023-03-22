import React from "react";

export default function MenuList(props) {


  return (  
    <li
    onClick={() => {props.onClick(props.id)}}
    >
    <div class="menu-list">
      <button>{props.title}</button>
    </div>
    </li>
  )

}