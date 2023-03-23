import React from 'react';
import { Context, useContext } from 'Context/index';
import CartItem from './CartItem';
const Cart2 = () => {
  const { state } = useContext(Context);

  return (
    <div className="cart">
      {state.cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart2;