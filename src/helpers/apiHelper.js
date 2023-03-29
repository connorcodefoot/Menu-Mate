import React from 'react';
import axios from 'axios';

const addItemToDB = (itemID, orderID, notes) => {

  axios.post('/api/user/new-order-item', null, {
    params: {
      itemID,
      orderID,
      notes
    }
  })

}

const getOrderTotal = (orderID) => {

  axios.get(`api/user/order-total/${orderID}`)
  .then((res) => {
    console.log(res.data.data.rows[0].sum)
    return res.data.data.rows[0].sum
  })
  .catch(err => { return err })
  

}

export { addItemToDB } 