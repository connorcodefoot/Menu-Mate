import React from 'react';
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


const Cart2 = () => {

  // State controller
  const { state, cartTotal } = useContext(Context);
  const [orderDetailsView, showOrderDetails] = useState(false)
  const [orderID, setOrderID] = useState(1)
  const total = cartTotal() / 100;
  const { user } = useContext(UserContext);
  // axios.post('/api/stripe/create-checkout-session')


  // const stripeCheckout = function () {
  //   axios.get('/api/stripe/checkout-url')
  //   .then((res) => {
  //   window.location.href = res.data.stripeSession.url
  //   })
  // }

  // Create an Order and get back an ID
  
    const submitOrder = () => {

    const order = {
      customer_name: user.name,
      table_number: user.table,
      order_total_cents: total
    };

    axios.post('/api/user/new-order', null, { params: order })
      .then(res => {
        setOrderID(res.data.rows[0].id)
      })
      .then(() => {
        showOrderDetails(true)
      })
        .catch((err) => { return 'error'; });
  };

  return (
    <>
      <div className="cart">
        {state.cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
        {orderDetailsView && <UserOrder orderID={orderID} />}

        Cart Total = ${total}
        <button onClick={submitOrder}>
          Submit Order
        </button>
        <p>Don't worry, you  can modify your order in the next step and pay whenever you are ready</p>
      </div>
    </>
  );
};


export default Cart2;
