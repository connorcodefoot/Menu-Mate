import React from "react";

import "./MenuItem.scss";

export default function MenuItem(props) {

  return (
    <li className="menu-item">
      <div className="item-details">
        <h2 className="item-name">{props.name}</h2>
        <p className="item-description">{props.description}</p>
      </div>
      <div className="price-quantity">
        <h2>${props.price_cents/100}</h2>
        <p>- or +</p>
      </div>
    </li>
  )
}