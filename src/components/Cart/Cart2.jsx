import React from 'react';
import { Context, useContext } from 'Context/index';
import CartItem from './CartItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'components/Cart/UserOrder.scss';

const Cart2 = () => {

  const { state, cartTotal } = useContext(Context);

  const total = cartTotal() / 100;

  axios.post('/api/stripe/create-checkout-session');

  let navigate = useNavigate();
  const stripeCheckout = function() {
    axios.get('/api/stripe/checkout-url')
      .then((res) => {
        window.location.href = res.data.stripeSession.url;
      });
  };

  return (
    <>
      <nav>
        <h1 className="rest-name">*RESTAURANT NAME*</h1>
      </nav>
      <h2 className="user-order">Your Order</h2>
      <Link to="/user/menu">
        <button className="btn-add">+ Add Items</button>
      </Link>
      <div className="order">
        {state.cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
        <h4 className='order-total'><b>Order Total:</b> ${total}</h4>
        <div className="btn-options">
          <button className="place"><b>Place Order</b></button>
          <button className="pay" onClick={stripeCheckout}><b>Pay Now</b></button>
        </div>
      </div>
    </>
  );
};

export default Cart2;
