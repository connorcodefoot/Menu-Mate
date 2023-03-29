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


  // State controllers
  const [isLoading, setLoading] = useState(true);
  const [checkout, showCheckout] = useState(false);
  const navigate = useNavigate();
  const { state, cartTotal } = useContext(Context);
  const { user, setUser } = useContext(UserContext);
  const [orderItems, setItems] = useState();
  const [orderTotal, setOrderTotal] = useState()

  useEffect(() => {
    const getOrderItems = async () => {
    await axios.get(`/api/user/orders/${user.orderID}`)
      .then((res) => {
        setItems(res.data.items);
        setLoading(false)
      })
      .catch((err) => { return 'error'; });
    }

    const timer = setTimeout(() => {
      getOrderItems();
    }, 2000);

    return () => clearTimeout(timer);

    },[ user.orderID, state.cart.length ]);

  useEffect(() => {
    const orderTotal = async () => {
    await axios.get(`api/user/order-total/${user.orderID}`)
    .then((res) => {
      setOrderTotal(res.data.data.rows[0].sum)
    })
    .catch(err => { return err })
    }

    const timer = setTimeout(() => {
      orderTotal();
    }, 2000);

    return () => clearTimeout(timer);

    },[ state.cart.length ]);
  

  const orderPaid = () => {
    axios.put(`/api/user/orders/${user.orderID}/paid`)
      .then(res => {
        navigate('/user/thank-you');

      })
      .catch((err) => { return 'error'; });
  };

  if (isLoading) {
    return <div> LOADING YOUR ORDER </div>;
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
      <h4 className='order-total-end'><b>Order Total: ${orderTotal / 100}</b></h4>
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
