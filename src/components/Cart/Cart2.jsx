import React from 'react';
import { Context, UserContext, useContext, OrderContext } from 'Context/index';
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
    const { state, cartTotal, emptyCart } = useContext(Context);
    const { order, setOrder } = useContext(OrderContext)
    const [showOrder, showOrderController] = useState(false)
    const total = cartTotal() / 100;
    const { user } = useContext(UserContext);
    const navigate = useNavigate()

  // Create an Order and get back an ID
    const submitOrder = () => {

    const newOrder = {
      customer_name: user.name,
      table_number: user.table,
      order_total_cents: total
    };

    axios.post('/api/user/new-order', null, { params: newOrder })
      .then(res => {
        setOrder({
        ...order,
          id: res.data.rows[0].id,
          total
        })
      })
      .then(() => {
        addItems()
      })
      .then(()=> {
        showOrderController(true)
      })
      .catch((err) => { return 'error'; });
    };

    const addItems = () => {

      state.cart.forEach((item) => {
      axios.post('/api/user/new-order-item', null, {
        params: {
          itemID: item.id,
          orderID: order.id
        }
      })
      .then(() => {
        emptyCart()
      })
        .catch((err) => { return 'error'; });
      });
    };

  console.log(order)
  return (
    <>
    {!showOrder && (<>
      <div className="cart">
        {state.cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
        <>Cart Total = ${total}</>
        <button onClick={submitOrder}>
          Submit Order
        </button>
        <button onClick={() => {navigate('/user/menu')}}>Add to Order</button>
      </div>
    </>)}
    {showOrder && (<>
    <div className="cart">
        {state.cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
        <UserOrder orderID={order.id} />
          Order Total = ${total}
        <button onClick={addItems}>
          Add Items to Order
        </button>
        <button onClick={() => {navigate('/user/menu')}}>Add to Order</button>
      </div>
      </>)}
    </>
  );
};


export default Cart2;
