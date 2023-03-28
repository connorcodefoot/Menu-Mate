import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Context, useContext } from '../../../Context/index';
import { useNavigate } from "react-router-dom";

import ShowItem from "./ShowItem";

import 'components/User/UserMenu.scss'

export default function Show(props) {

  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState ()
  const [item, setItem] = useState({
    id: "",
    title: "",
    details: "",
    price: 0,
    picture: ""
  })

  const { state } = useContext(Context);

  const navigate = useNavigate();

  function saveItem(id, menuID, title, details, price, picture) {
    const newItem = {
      id,
      menuID,
      title,
      details,
      price,
      picture
    };

    return new Promise((resolve, reject) => {
      axios.put(`/api/admin/menus/${id}`)
        .then(() => {
          setItem({
            newItem
          });
          resolve(true);
          navigate('/admin/menu')
        })
        .catch(error => {
          reject(true);
          console.log(error);
        });
    });
  }

  const redirect = (id, menuID, title, details, price, picture) => {
    navigate('/admin/form', {state: {
      id,
      menuID,
      title,
      details,
      price, 
      picture
    }})
  }

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
      <ShowItem
        id={item.id}
        menuID={props.menuID}
        title={item.title}
        details={item.details}
        price={item.price_cents}
        picture={item.picture}
        onEdit={redirect}
        onSave={saveItem}
      />
    </>
    );
  });

  return (  
  <>
    {displayItems}
  </>
  )
}


