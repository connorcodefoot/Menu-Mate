import React from 'react';
import { Context, UserContext, useContext } from 'Context/index';
import CartItem from './CartItem';
import axios from 'axios';


const Cart2 = () => {
  
  const { state, cartTotal } = useContext(Context);

  const total = cartTotal()/100

  const { user } = useContext(UserContext)

  // axios.post('/api/stripe/create-checkout-session')


  // const stripeCheckout = function () {
  //   axios.get('/api/stripe/checkout-url')
  //   .then((res) => {
  //   window.location.href = res.data.stripeSession.url
  //   })
  // }

  const showOrder = () => {

    axios.post('/api/user/new-order', null, { params: {
      customer_name: user.customer_name,
      table_number: user.table_number,
      // order_total_cents: 40
    }})
    .then(res => {
      console.log(res)
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
      <button onClick={showOrder}>
        Submit Order
      </button>
      <p>Don't worry, you  can modify your order in the next step and pay whenever you are ready</p>
    </div>
  );
};

export default Cart2;
