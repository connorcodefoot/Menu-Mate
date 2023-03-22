import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function UserMenuItem(props) {

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
          <h1>{item.title}</h1>
          {item.details} 
        </div>
        <div class="item-option">
          <h3>{item.price_cents / 100}</h3>
          <button class="add-item">+</button>
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