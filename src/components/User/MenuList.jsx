import React from "react";
import 'components/User/UserMenu.scss';

export default function MenuList(props) {


  return (  
    <li
    onClick={() => {}}
    >
    <div class="menu-list">
      <button class="menu-btns">{props.title}</button>
    </div>
    </li>
  )

}