import React, { useState } from 'react';
import axios from "axios";
import { Modal, Form, Button } from 'react-bootstrap';

function EditModal({ item, onSave, onClose }) {
  const [id, setId] = useState(item.id)
  const [menuID, setMenuID] = useState(item.menuID)
  const [title, setTitle] = useState(item.title);
  const [details, setDetails] = useState(item.details);
  const [price, setPrice] = useState(item.price);
  const [picture, setPicture] = useState(item.picture);

  const handleSave = () => {
    onSave({
      ...item,
      id: id,
      menuID: menuID,
      title: title,
      details: details,
      price: price,
      picture: picture
    });

    return new Promise((resolve, reject) => {
      axios.put(`/api/admin/edit-item`, null, {
        params: {
          id,
          menuID,
          title,
          details,
          price,
          picture
        }
      })
        .then((res) => {
          resolve(true);
          onClose();
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
        <Modal.Title>Edit Item</Modal.Title>
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

export default EditModal;
