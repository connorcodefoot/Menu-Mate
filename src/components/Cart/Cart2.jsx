import React from 'react';
import { Context, useContext } from 'Context/index';
import CartItem from './CartItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Cart2 = () => {
  
  const { state, cartTotal } = useContext(Context);

  const total = cartTotal()/100

  axios.post('/api/stripe/create-checkout-session')


  let navigate = useNavigate(); 
  const stripeCheckout = function () {
    axios.get('/api/stripe/checkout-url')
    .then((res) => {
    window.location.href = res.data.stripeSession.url
    })
  }

  return (
    <div className="cart">
      {state.cart.map((item) => (
        <CartItem 
        key={item.id} 
        item={item}
        />
      ))}
      Cart Total = ${total}
      <button onClick={stripeCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Cart2;
