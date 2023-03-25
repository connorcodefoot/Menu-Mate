import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Context, useContext } from '../../Context/index';


export default function UserMenuItem(props) {

  const { addToCart } = useContext(Context);
  const { cart } = props


  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState ()

  useEffect(() => {

    Promise.all([
      axios.get(`/api/user/menus/${props.menuID}`),
   ])
    .then((all) => {
      setItems(all[0].data.items)
      setLoading(false)
    })

  }, [])

  if (isLoading) {
    return <div> LOADING </div>;
  }

    const displayItems = items.map((item) => {
    return (
      <>
      <div class="user-menu-item">
        <div class="item-info">
        <img src={item.picture} class="item-imgs" />
          <h1 class="item-name">{item.title}</h1>
          {item.details} 
        </div>
        <div class="item-option">
          <h3 class="menu-price">{item.price_cents / 100}</h3>
          <button className="add-item" onClick={() => addToCart(item)} >
            +
          </button>
          {cart.map((cartItem) =>
            cartItem.id === item.id ? (
              cartItem.count > 0 ? (
                <span style={{ marginLeft: '5px' }}>
                  {' '}
                  ({cartItem.count} in the shopping cart){' '}
                </span>
              ) : null
            ) : null
          )}
        </div>
      </div>
    </>
    );
  });

  return (  
  <>
    {displayItems}
  </>
  )
}