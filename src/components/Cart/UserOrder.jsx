import React from "react";
import { useState } from "react";
import { Context, UserContext, OrderContext, useContext } from 'Context/index';
import axios from "axios";
import UserOrderItem from './UserOrderItem';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Stripe Form Requirements
import CheckoutForm from '../User/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

export default function UserOrder(props) {

  const [isLoading, setLoading] = useState(true);
  const [orderItems, setOrderItems] = useState();
  const [checkout, showCheckout] = useState(false);
  const [paid, paidStatus] = useState(false);
  const navigate = useNavigate();
  const { order, setOrder } = useContext(OrderContext);
  const { state, cartTotal } = useContext(Context);

  // useEffect(() => {
  //   state.cart.forEach((item) => {
  //     addItem(item, order.id);
  //   });
  // }, []);

  // // Add unique item to DB
  // const addItem = (item, orderID) => {

  //   axios.post('/api/user/new-order-item', null, {
  //     params: {
  //       itemID: item.id,
  //       orderID
  //     }
  //   })
  //     .then(() => {
  //       getOrder(orderID);
  //     })
  //     .catch((err) => { return 'error'; });
  // };
  useEffect(() => {
    axios.get(`/api/user/orders/${order.id}`)
      .then(res => {
        setOrder({
          ...order,
          orderItems: res.data.items
        });
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div> LOADING </div>;
  }

  const orderPaid = () => {
    axios.put(`/api/user/orders/${props.orderID}/paid`)
      .then(res => {
        navigate('/user/thank-you');

      })
      .catch((err) => { return 'error'; });
  };

  const displayOrderItems = order.orderItems.map((item) => {

    return (
      <>
        <UserOrderItem
          title={item.title}
          details={item.details}
          price={item.price_cents}
        />
      </>
    );
  });

  return (
    <>
      <div>
        <h3> Your order was submitted. Feel free to pay now or start a tab if you plan on adding to your order</h3>
        {displayOrderItems}
      </div>
      <div>
        {!checkout && <button onClick={() => { showCheckout(true); }}>Settle Up</button>}
        <button onClick={() => { navigate('/user/menu'); }}>Add to Order</button>

      </div>
      <div>
        {checkout && (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              onClick={() => orderPaid()}
            />
          </Elements>
        )}
      </div>
    </>
  );
}
