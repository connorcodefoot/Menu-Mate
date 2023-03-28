import React from "react";
import 'components/User/UserMenu.scss';

export default function ShowItem(props) {

  return (
    <>
      <div class="user-menu-item">
        <div class="item-info">
          <img src={props.picture} class="item-imgs" />
          <h1>{props.title}</h1>
          {props.details}
        </div>
        <div class="item-option">
          <h3>{props.price / 100}</h3>
          <h3>Item ID: {props.id}</h3>
        </div>
        <section className="item__actions">
          <button
            className="appointment__actions-button"
            alt="Edit"
            onClick={() => props.onEdit(props.id, props.menuID, props.title, props.details, props.price, props.picture)}
        
          >Edit</button>
          <button
            className="appointment__actions-button"
            alt="Delete"
            onClick={props.onDelete}
          >Delete</button>
        </section>
      </div>
    </>
  );
};



