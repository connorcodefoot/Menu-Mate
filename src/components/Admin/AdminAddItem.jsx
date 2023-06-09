import React, { useState } from 'react';
import axios from "axios";
import { Modal, Form, Button } from 'react-bootstrap';

function AddItemModal({ item, onSave, onClose }) {
  const [menuID, setMenuID] = useState(item.menuID)
  const [title, setTitle] = useState(item.title);
  const [details, setDetails] = useState(item.details);
  const [price, setPrice] = useState(item.price);
  const [picture, setPicture] = useState(item.picture);

  const refresh = () => window.location.reload(true)

  const handleSave = () => {
    onSave({
      ...item,
      title: title,
      details: details,
      price: price,
      picture: picture
    });

    return new Promise((resolve, reject) => {
      axios.post(`/api/admin/new-item`, null, { params: { 
        menuID,
        title, 
        details, 
        price, 
        picture 
      }})
        .then((res) => {
          resolve(true);
          onClose();
          refresh();
        })
        .catch(error => {
          reject(true);
        });
    });

  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Menu Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={details}
              onChange={event => setDetails(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price (in cents)</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={event => setPrice(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              value={picture}
              onChange={event => setPicture(event.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddItemModal;
