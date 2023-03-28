import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Context, useContext } from '../../../Context/index';
import { useNavigate } from "react-router-dom";
import AddItemModal from '../AdminAddItem';

import ShowItem from "./ShowItem";

import 'components/User/UserMenu.scss'

export default function Show(props) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState ()

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState();
  const [picture, setPicture] = useState("");


  const handleClick = () => {
    setShowAddModal(true);
  };

  const handleAddSave = (addedItem) => {
    // save the edited item to backend or state
    console.log('Added item:', addedItem);
    setTitle(addedItem.title);
    setDetails(addedItem.details);
    setPrice(addedItem.price);
    setPicture(addedItem.picture);
  };

  const handleAddClose = () => {
    setShowAddModal(false);
  };


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
      />
    </>
    );
  });

  return (  
  <>
    <button onClick={handleClick}>Add Menu Item</button>
    <br></br>
    <br></br>
    {showAddModal && (
        <AddItemModal
          item={{
            menuID: props.menuID,
            title: title,
            details: details,
            price: price, 
            picture: picture
          }}
          onSave={handleAddSave}
          onClose={handleAddClose}
          onUpdateTitle={setTitle}
        />
      )}
    <br/>
    {displayItems}
  </>
  )
}


