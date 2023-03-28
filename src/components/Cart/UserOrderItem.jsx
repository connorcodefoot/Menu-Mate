import React from "react";

export default function UserMenuItem(props) {


  return (
    <>
      <div className="prev-list-item">
        <div className="prev-list-item-info">
            <h5 className="item-name">{props.title}</h5>
            {/* <span className="price">
          </span> */}
        </div>
        <div className="prev-total">
          <div>
            <span className="prev-subtotal">
              <b>Subtotal </b> ${(props.price.toFixed(2)) / 100}
            </span>
          </div>
        </div>
      </div>
    </>

  );


}
