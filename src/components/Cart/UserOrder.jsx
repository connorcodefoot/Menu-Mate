import React from "react";
import { useState } from "react";
import { Context, UserContext, useContext } from 'Context/index';
import axios from "axios";
import UserOrderItem from './UserOrderItem';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import 'components/Cart/UserOrder.scss';


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

  console.log('user', user);

  useEffect(() => {
    console.log('useEffectRuns');
    axios.get(`/api/user/orders/${user.orderID}`)
      .then((res) => {
        setItems(res.data.items);
        setLoading(false);
      })
      .catch((err) => { return 'error'; });
  }, [props.orderID, state.cart]);


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
        <h3 className="prev-order"> Submitted Items</h3>
        <p className="prev-order-msg"> Our team is preparing the following:</p>
        <div className="prev-item">
          {displayOrderItems}
        </div>
      </div>
      <h4 className='order-total-end'><b>Order Total:</b> Working on it</h4>
      <div>
        {!checkout && <button className="settle" onClick={() => { showCheckout(true); }}>Settle Up</button>}

      </div>
      <div className="payment">
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
