import React from 'react';
import axios from 'axios';

const addItemToDB = (itemID, orderID) => {

  axios.post('/api/user/new-order-item', null, {
    params: {
      itemID,
      orderID
    }
  })

}

const getOrderTotal = (orderID) => {

  axios.get(`api/user/order-total/${orderID}`)
    .then((res) => {
      return res.data.items.rows[0].sum
    })

}

export { addItemToDB, getOrderTotal } 