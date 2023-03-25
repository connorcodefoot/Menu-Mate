import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Context, useContext } from '../../../Context/index';
import 'components/User/UserMenu.scss'
import ShowItem from "./ShowItem";
import { useNavigate } from "react-router-dom";

export default function Show(props) {

  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState ()
  
  const { state } = useContext(Context);

  const navigate = useNavigate();

  const redirect = (id, title, details, price, picture) => {
    navigate('/admin/form', {state: {
      id,
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
        title={item.title}
        details={item.details}
        price={item.price_cents}
        picture={item.picture}
        onEdit={redirect}
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


