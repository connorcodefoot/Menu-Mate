import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


export default function AdminOrderView(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal className="my-modal"
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="my-modal-title">Order Details for Order #{props.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-modal-body">
          <p>{props.item}</p>
          <p>Price: ${props.itemPrice / 100}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="admin-order">
        <div className="order-info">
          <h4 className="order">Order #{props.id}</h4>
          <div className="customer-info">
            <h5 className="customer">Customer:</h5>
            <h5>{props.customer}</h5>
          </div>
        </div>
        {/* <div className="order-items">
          <h4>Items</h4>
          <h5>{props.item}</h5>
          <h5>${props.itemPrice / 100}</h5>
        </div> */}
        <div className="admin-order-options">
          <form>
            <button className="view" type="button" onClick={handleShow}>
              View Order Details
            </button>
          </form>
          <form>
            <button className="set" type="submit">Set to In Progress</button>
          </form>
          <form>
            <button className="paid" type="submit">Mark Paid</button>
          </form>
        </div>
      </div>
    </>
  );
}