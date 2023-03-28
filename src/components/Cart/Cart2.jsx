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
import { addItemToDB, getOrderTotal } from 'helpers/apiHelper';


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

  // Add items to order
  const addItems = (orderID) => {

    state.cart.forEach((item) => {
      addItemToDB(item.id, orderID);
    });

    // Remove items from cart now that they are added to an order
    emptyCart();

    // Set orderID on user
    if (user.orderID === 0) {
      setUser({
        ...user,
        orderID: orderID
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
      <nav>
        <h1 className="rest-name">*RESTAURANT NAME*</h1>
      </nav>
      <h2 className="user-order">YOUR CURRENT ORDER</h2>
      <button className="btn-add" onClick={() => { navigate('/user/menu'); }}>+ Add to Order</button>

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
            <b>Place Order</b>
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
          <button className="btn-add-more" onClick={addMoreItems}>
            Add Items to Existing Order
          </button>
          <UserOrder orderID={user.orderID} />
        </div>
      </>)}
    </>
  );
};


export default Cart2;
