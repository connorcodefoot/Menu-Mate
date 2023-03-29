import React, { useState } from 'react';
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

function DeleteItemModal({ menu, onClose }) {
  const [id, setId] = useState(menu.id)

  const refresh = () => window.location.reload(true)

  const handleDelete = () => {

    return new Promise((resolve, reject) => {
      axios.delete(`/api/admin/delete-item/${id}`, { params: { id } })
        .then((res) => {
          resolve(true);
          onClose();
          refresh();
        })
        .catch(error => {
          reject(true);
          console.log(error);
        });
    });

  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you wish to delete this item?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteItemModal;
