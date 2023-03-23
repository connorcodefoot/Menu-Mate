import React from "react";

export default function Show(props) {

  return (
    <>
      <div class="user-menu-item">
        <div class="item-info">
          <h1>{props.title}</h1>
          {props.details}
        </div>
        <div class="item-option">
          <h3>{props.price / 100}</h3>
        </div>
        <section className="item__actions">
          <button
            className="appointment__actions-button"
            alt="Edit"
            onClick={props.onEdit}
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
}


