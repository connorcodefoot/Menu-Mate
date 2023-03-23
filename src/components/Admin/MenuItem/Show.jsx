import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import 'components/User/UserMenu.scss'

export default function Show(props) {

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
          <h1>{item.title}</h1>
          {item.details} 
        </div>
        <div class="item-option">
          <h3>{item.price_cents / 100}</h3>
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
  });

  return (  
  <>
    {displayItems}
  </>
  )
}


