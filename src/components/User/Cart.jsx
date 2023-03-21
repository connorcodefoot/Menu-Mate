import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'components/User/Cart.scss';

function Cart() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const [items, setItems] = useState([]);

useEffect(() => {
  axios.get('/api/user/cart')
    .then((res) => {
      setItems(res.data.items);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


  function handleOptionChange(itemId, optionValue) {
    setSelectedOptions(prevState => ({
      ...prevState,
      [itemId]: optionValue
    }));
  }

  // function handleRemoveItem(itemId) {
  //   setSelectedOptions(prevState => {
  //     const { [itemId]: removedItem, ...restOptions } = prevState;
  //     return restOptions;
  //   });
  // }

  const filteredItems = items.filter(item => {
    return !selectedOptions[item.id] || selectedOptions[item.id] !== "0";
  });

  return (
    <>
      <nav>
        <h1 class="rest-name"> *RESTAURANT NAME*</h1>
      </nav>
      <ul class="menu">
        {filteredItems.map(item => (
          <li key={item.id} class="menu">
            <h2>{item.title}</h2>
            <p>{item.details}</p>
            <p>${item.price_cents / 100}</p>
            <select
              value={selectedOptions[item.id] || "1"}
              onChange={e => handleOptionChange(item.id, e.target.value)}
              class="options"
            >
              <option value="0" class="ei">
                Remove
              </option>
              <option value="1" class="ei">
                1
              </option>
              <option value="2" class="ei">
                2
              </option>
              <option value="3" class="ei">
                3
              </option>
              <option value="4" class="ei">
                4
              </option>
              <option value="5" class="ei">
                5
              </option>
              <option value="6" class="ei">
                6
              </option>
              <option value="7" class="ei">
                7
              </option>
              <option value="8" class="ei">
                8
              </option>
              <option value="9" class="ei">
                9
              </option>
              <option value="10" class="ei">
                10
              </option>
            </select>
            {/* <button
              class="order-button"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove Item
            </button> */}
          </li>
        ))}
      </ul>
      <div class="checkout-container">
      <button class="checkout"> Checkout </button>
      </div>
    </>
  );
}

export default Cart;
