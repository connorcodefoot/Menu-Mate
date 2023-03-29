import React, { useState } from 'react';
import axios from "axios";
import { Modal, Form, Button } from 'react-bootstrap';

function AddMenuModal({ menu, onSave, onClose }) {
  const [title, setTitle] = useState(menu.title);

  const handleSave = () => {
    onSave({
      title
    });

    return new Promise((resolve, reject) => {
      axios.post(`/api/admin/new-menu`, null, { params: { title } } )
        .then((res) => {
          resolve(true);
          onClose();
        })
        .catch(error => {
          reject(true);
        });
    });

  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Menu Category</Modal.Title>
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

export default AddMenuModal;
