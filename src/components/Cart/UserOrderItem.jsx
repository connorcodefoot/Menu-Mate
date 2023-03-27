import React from "react";

export default function UserMenuItem(props) {


  return (
    <>
      <div className="list-item">
        <div className="list-item-info">
          <h3 className="title">{props.title}</h3>
          <p>{props.details}</p>
          <span className="info">
            <span className="price">
              <b>Price: </b> ${props.price.toFixed(2) / 100}
            </span>
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
