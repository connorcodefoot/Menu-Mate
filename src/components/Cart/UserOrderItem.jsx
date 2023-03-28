import React from "react";

export default function UserMenuItem(props) {


  return (
    <>
      <div className="list-item">
        <div className="list-item-info">
            <span className="price">
            <h5>{props.title}</h5>
          </span>
        </div>
        <div className='stuff'>
          <div>
            <span className='subtotal'>
              <b>Subtotal </b> ${(props.price.toFixed(2)) / 100}
            </span>
          </div>
        </div>
      </div>
    </>

  );


}
