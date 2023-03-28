// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'components/User/UserMenu.scss';
import EditTitleModal from '../AdminEdit'

export default function ShowItem(props) {

  const [showEditModal, setShowEditModal] = useState(false);
  const [title, setTitle] = useState(props.title);
  

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleEditSave = (editedItem) => {
    // save the edited item to backend or state
    console.log('Edited item:', editedItem);
    setTitle(editedItem.title);
  };

  const handleEditClose = () => {
    setShowEditModal(false);
  };
  
  return (
    <>
     <div>
        <div>
          <img src={props.picture} alt={title} />
          <h1>{title}</h1>
          {props.details}
        </div>
        <div>
          <h3>{props.price / 100}</h3>
        </div>
        <section className="item-actions">
          <button
            alt="Edit"
            onClick={handleEdit}
          > Edit
          </button>
        </section>
      </div>
      {showEditModal && (
        <EditTitleModal
          item={{ title: props.title, details: props.details, price: props.price, picture: props.picture }}
          onSave={handleEditSave}
          onClose={handleEditClose}
        />
      )}
    </>
  );
};