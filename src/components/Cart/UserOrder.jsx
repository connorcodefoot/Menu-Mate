import React from "react";
import { useState } from "react";
import { Context, UserContext, useContext } from 'Context/index';
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
  const [checkout, showCheckout] = useState(false);
  const navigate = useNavigate();
  const { state, cartTotal } = useContext(Context);
  const { user } = useContext(UserContext);
  const [orderItems, setItems] = useState();

  console.log('user', user)

  useEffect(() => {
    console.log('useEffectRuns')
    axios.get(`/api/user/orders/${user.orderID}`)
    .then((res) => {
      setItems(res.data.items)
      setLoading(false)
      })
    .catch((err) => { return 'error'; });
  }, [user.orderID, state.cart]);


  const orderPaid = () => {
    axios.put(`/api/user/orders/${user.orderID}/paid`)
      .then(res => {
        navigate('/user/thank-you');

      })
      .catch((err) => { return 'error'; });
  };

  if (isLoading) {
    return <div> LOADING </div>;
  }


  const displayOrderItems = orderItems.map((item) => {

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
        <h3> Submitted Items</h3>
        <p>Our team is preparing the following:</p>
        {displayOrderItems}
      </div>
      <div>
        {!checkout && <button onClick={() => { showCheckout(true); }}>Settle Up</button>}

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
