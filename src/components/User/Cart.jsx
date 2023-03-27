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
      });
  }, []);

  function handleOptionChange(itemId, optionValue) {
    setSelectedOptions(prevState => {
      const newSelectedOptions = { ...prevState };
      if (optionValue === "0") {
        // Remove the item from the cart
        delete newSelectedOptions[itemId];
  
        // Remove the item from the items array
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
      } else {
        // Update the selected option
        newSelectedOptions[itemId] = optionValue;
      }
      return newSelectedOptions;
    });
  }

  function getTotal() {
    let total = 0;
    items.forEach((item) => {
      const selectedOption = selectedOptions[item.id] || "1";
      const quantity = parseInt(selectedOption);
      const itemTotal = quantity * (item.price_cents / 100);
      total += itemTotal;
    });
    return total.toFixed(2);
  }

  return (
    <>
      <nav>
        <h1 className="rest-name">*RESTAURANT NAME*</h1>
      </nav>
      <h1 className="cart">Cart</h1>
      <ul className="menu">
        {items.map((item) => (
          <li key={item.id} className="menu">
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
          </li>
        ))}
      </ul>
      <div class="total">
        <p>Total: ${getTotal()}</p>
      </div>
      <div class="checkout-container">
        <button class="checkout"> Checkout </button>
      </div>
    </>
  );
}

export default Cart;
