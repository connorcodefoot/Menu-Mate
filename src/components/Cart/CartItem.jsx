import React, { useState } from 'react';
import { Context, useContext } from 'Context/index';
import { Modal, Form, Button } from 'react-bootstrap';
import 'components/Cart/UserOrder.scss';

const CartItem = (props) => {
  const { item } = props;
  const { increase, decrease, removeItem } = useContext(Context);

  const [show, setShow] = useState(false);
  const [note, setNote] = useState('');

  const handleShow = () => setShow(true);

  const handleClose = () => {
    item.note = note;
    setShow(false);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Note</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={note}
              onChange={handleNoteChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="list-item">
        <div className="list-item-info">
          <h3 className="title">{item.title}</h3>
          <p>{item.details}</p>
          <span className="info">
            <span className="price">
              <b>Price: </b> ${item.price_cents.toFixed(2) / 100}
            </span>
            <button className="btn-note" onClick={handleShow}>Add Order Note</button>
            <span> {item.note && (
              <h6 className='note-msg'>
                Note: {item.note}
              </h6>
            )}
            </span>
          </span>
        </div>
        <div className='stuff'>
          <img className="list-item-image" src={item.picture} alt={item.name} />
          {item.count > 1 && (
            <>
            </>
          )}
          <div>
            <span className='quantity-btns'>
              {item.count === 0 ? (
                <>
                  <span className="no-quantity">
                    <button onClick={() => removeItem(item.id)} className="remove-btn">
                      Remove Item
                    </button>
                    <button onClick={() => increase(item)} className="add-back-btn">
                      Add Back Item
                    </button>
                  </span>
                </>

              ) : (
                <>
                  <span className="pos-quantity">
                    <button onClick={() => decrease(item)}>
                      {' '}
                      -{' '}
                    </button>
                    <span>
                      <h4 className='count'>{item.count}</h4>
                    </span>
                    <button onClick={() => increase(item)}>
                      {' '}
                      +{' '}
                    </button>
                  </span>
                </>
              )}
              <span className='subtotal'>
                <b>Subtotal </b> ${(item.price_cents * item.count).toFixed(2) / 100}
              </span>
            </span>
          </div>
        </div>
      </div>

    </>
  );
};

export default CartItem;
