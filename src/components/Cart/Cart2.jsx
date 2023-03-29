import React, { useEffect } from 'react';
import { Context, UserContext, useContext } from 'Context/index';
import CartItem from './CartItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'components/Cart/UserOrder.scss';
// import UserOrder from './UserOrder';
import { useState } from 'react';
// import UserOrderItem from './UserOrderItem';
import UserOrder from './UserOrder.jsx';
import { addItemToDB } from 'helpers/apiHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Cart2 = () => {

  // State controller
  const { state, cartTotal, emptyCart } = useContext(Context);
  const [showOrder, showOrderController] = useState(false);
  const total = cartTotal() / 100;
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Create an Order and get back an ID
  const submitOrder = () => {

    const newOrder = {
      customer_name: user.name,
      table_number: user.table,
      order_total_cents: total
    };

    axios.post('/api/user/new-order', null, { params: newOrder })
      .then(res => {
        console.log(res);
        addItems(res.data.rows[0].id);
      })
      .catch((err) => { return 'error'; });
  };

  // Add items to order using the orderID retrieved from SubmitOrder
  const addItems = (orderID) => {

    state.cart.forEach((item) => {
      addItemToDB(item.id, orderID);
    });

    // Remove items from cart now that they are added to an order
    emptyCart();

    // Set orderID and orderTotal
    if (user.orderID === 0) {
      setUser({
        ...user,
        orderID: orderID,
      });
    }
  };

  const addMoreItems = () => {

    state.cart.forEach((item) => {
      addItemToDB(item.id, user.orderID);
    });

    // Remove items from cart now that they are added to an order
    emptyCart();
  };

  return (
    <>

      <h1 className="restaurant-name">*RESTAURANT NAME*</h1>
      <button className='to-menu' onClick={() => { navigate('/user/menu'); }}>
        <FontAwesomeIcon icon={faAnglesLeft} size="xl" />
        <span className='hover-text'> Back to Menu </span>
      </button>



      {/* <h2 className="user-order">ITEMS TO BE SENT</h2> */}
      {/* <button className="btn-add" onClick={() => { navigate('/user/menu'); }}>Back to Menu</button> */}

      {(user.orderID === 0) && (<>
        <div className="order">
          {state.cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
          <h4 className='order-total-user'><b>Order Total:</b> ${total}</h4>
          <button className="place" onClick={submitOrder}>
            <b>Submit Order</b>
          </button>
        </div>
      </>)}
      {(user.orderID > 0) && (<>
        <div className="order">
          {state.cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
          <div className='adding-msg'>
            <button className="btn-add-more" onClick={addMoreItems}>
            <FontAwesomeIcon className='send-icon'icon={faPaperPlane} beatFade/>
              Send New Items
            </button>
            <p className='new-order-msg'>These new items will be added to your existing order below once sent</p>
          </div>
          <UserOrder orderID={user.orderID} />
        </div>
      </>)}
    </>
  );
};


export default Cart2;
