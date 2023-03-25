import React from "react";
import axios from "axios";

import { useState } from "react";
import { Context, useContext } from '../../../Context/index';

import Show from "./Show";

export default function AdminMenuItem(props) {
  const { state } = useContext(Context);

  const [item, setItem] = useState({
    title: "",
    details: "",
    price_cents: 0,
    picture: ""
  })

  function saveItem(title, details, price, picture) {
    const newItem = {
      title: title,
      details: details,
      price: price,
      picture: picture
    };


    return new Promise((resolve, reject) => {
      axios.put(`/api/admin/menus/${item.id}`)
        .then(() => {
          setItem({
            newItem
          });
          resolve(true);
          transition(SHOW);
        })
        .catch(error => {
          reject(true);
          transition(ERROR_SAVE, true)
          console.log(error);
        });
    });
  }

  function deleteItem(event) {
    transition(DELETING, true);
    props
      .deleteItem(props.id)
      .then((resolved) => {
        console.log("resolved", resolved);
      })
      .catch(error => transition(ERROR_DELETE, true));
  }

  return (
    <article className="item">
      {mode === SHOW && (
        <Show
          menuID={props.menuID}
        />
      )}
    </article>
  );
}
