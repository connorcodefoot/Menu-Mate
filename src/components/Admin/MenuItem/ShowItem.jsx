// import React from "react";
import React, { useEffect, useState } from "react";
import 'components/User/UserMenu.scss';
import EditModal from '../AdminEdit';
import DeleteItemModal from "../AdminDeleteItem";
import axios from "axios";

export default function ShowItem(props) {

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState(props.id);
  const [menuID, setMenuID] = useState(props.menuID);
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

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteClose = () => {
    setShowDeleteModal(false);
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
          <button
            className="appointment__actions-button"
            alt="Edit"
            onClick={handleDelete}
          > Delete
          </button>
        </section>
      </div>
      {showEditModal && (
        <EditModal
          item={{
            id,
            menuID,
            title,
            details,
            price,
            picture
          }}
          onSave={handleEditSave}
          onClose={handleEditClose}
          onUpdateTitle={setTitle}
        />
      )}
      {showDeleteModal && (
        <DeleteItemModal
          menu={{ id }}
          onClose={handleDeleteClose}
          onUpdateTitle={setTitle}
        />
      )}
    </>
  );
};