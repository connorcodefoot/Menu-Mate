import React from "react";

import "./MenuItem.scss";

export default function MenuItem(props) {

  return (
    <li className="menu-item">
      <div className="item-details">
        <h2 className="item-name">Cheeseburger</h2>
        <p className="item-description">Two grilled patties, melted american cheese, caramelized onions, tomato, shredded lettuce and secret house sauce</p>
      </div>
      <div className="price-quantity">
        <h2>$15.99</h2>
        <p>- or +</p>
      </div>
    </li>
  )
}