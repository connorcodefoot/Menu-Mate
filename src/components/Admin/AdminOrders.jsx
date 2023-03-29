import React from "react";
import AdminOrderView from "./AdminOrderView";
import "components/Admin/AdminOrders.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function AdminOrders() {
  const [isLoading, setLoading] = useState(true);
  const [orders, setOrders] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    axios.get("/api/admin/orders").then((res) => {
      setOrders(res.data.data.rows);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    // Add the home-background class to the body element (this is being used for background color on home page without affecting other pages)
    document.body.classList.add("admin-background");
    // Remove the home-background class when component unmounts
    return () => {
      document.body.classList.remove("admin-background");
    };
  }, []);

  if (isLoading) {
    return <div class="admin-loading"> LOADING </div>;
  }

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const displayOrders = orders.map((order) => {
    return (
      <>
        <div class="admin-orders">
          <div className="admin-order" key={order.id}>
            <div className="order-info">
              <h5 className="order">Order #{order.id}</h5>
              <div className="customer-info">
                <h5>{order.customer_name}</h5>
              </div>
            </div>
            <div className="order-info">
              <p className="order">Table #{order.table_number}</p>
              <div className="customer-info">
                <p>{order.paid ? <>PAID</> : <>UNPAID</>}</p>
              </div>
            </div>
            <div class="order-status">{order.order_status}</div>
            <div className="admin-order-options">
              <form>
                <button className="view" type="button" onClick={() => handleViewOrder(order)}>
                  View Order Details
                </button>
              </form>
              {/* <form>
                <button className="set" type="submit">Set to In Progress</button>
              </form>
              <form>
                <button className="paid" type="submit">Mark Paid</button>
              </form> */}
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="all-orders">
        {displayOrders}
      </div>
      {selectedOrder && (
        <Modal className="modal-container"
          show={showModal}
          onHide={handleCloseModal}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="my-modal-title">Order Details for Order #{selectedOrder.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="my-modal-body">
            <AdminOrderView id={selectedOrder.id} />
            <p className="order-total">Total: ${selectedOrder.order_total_cents / 100}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
