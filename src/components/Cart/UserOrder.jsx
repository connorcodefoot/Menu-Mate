import React from "react";
import { useState } from "react";
import { Context, UserContext, useContext } from 'Context/index';
import axios from "axios";
import UserOrderItem from './UserOrderItem'
import { useEffect } from "react";



export default function UserOrder(props) {

  const [isLoading, setLoading] = useState(true);
  const [orderItems, setOrderItems] = useState()  
  

  const { state, cartTotal, emptyCart } = useContext(Context);
  const cart = state.cart;

  useEffect(() => {
    cart.forEach((item) => {
      addItem(item, props.orderID);
    });
  }, []);

  // Add unique item to DB
  const addItem = (item, orderID) => {

    axios.post('/api/user/new-order-item', null, {
      params: {
        itemID: item.id,
        orderID
      }
    })
      .then(() => {
        getOrder(orderID);
      })
      .catch((err) => { return 'error'; });
  };

  const getOrder = (orderID) => {

    axios.get(`/api/user/orders/${orderID}`)
      .then(res => {
        setOrderItems(res.data.items)
        emptyCart()
        setLoading(false)
        console.log(setOrderItems)
      });
  };

  if (isLoading) {
    return <div> LOADING </div>;
  }

  const displayOrderItems = orderItems.map((item) => {
  
    return (
    <>
    <h1> Order Summary </h1>
    <UserOrderItem
      title={item.title}
      details={item.details}
      price={item.price_cents}
    />
    </>
    )
  })

  return (
    <div>
      {displayOrderItems}
    </div>
  );


}