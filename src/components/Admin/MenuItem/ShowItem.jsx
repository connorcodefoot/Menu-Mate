// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'components/User/UserMenu.scss';
import EditModal from '../AdminEdit';

export default function ShowItem(props) {

  const [showEditModal, setShowEditModal] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [details, setDetails] = useState(props.details);
  const [price, setPrice] = useState(props.price);
  const [picture, setPicture] = useState(props.picture);


  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleEditSave = (editedItem) => {
    // save the edited item to backend or state
    console.log('Edited item:', editedItem);
    setTitle(editedItem.title);
    setDetails(editedItem.details);
    setPrice(editedItem.price);
    setPicture(editedItem.picture);
  };

  const handleEditClose = () => {
    setShowEditModal(false);
  };

  return (
    <>
      <div>
        <div>
          <img src={picture} />
          <h1>{title}</h1>
          {details}
        </div>
        <div>
          <h3>{price / 100}</h3>
        </div>
        <section className="item__actions">
          <button
            className="appointment__actions-button"
            alt="Edit"
            onClick={handleEdit}
          > Edit
          </button>
        </section>
      </div>
      {showEditModal && (
        <EditModal
          item={{
            title: props.title,
            details: props.details,
            price: props.price, 
            picture: props.picture
          }}
          onSave={handleEditSave}
          onClose={handleEditClose}
          onUpdateTitle={setTitle}
        />
      )}
    </>
  );
};