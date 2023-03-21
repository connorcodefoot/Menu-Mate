// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import React, { useState } from "react";
import 'components/User/Cart.scss';


const items = [

  {
    id: 2,
    title: 'Salad',
    details: 'Nutricious not delicious',
    price_cents: 1300,
    active: true
  },
  {
    id: 3,
    title: 'Soup',
    details: 'Soup De Jour all jour',
    price_cents: 1100,
    active: true
  },
  {
    id: 4,
    title: 'Burrito',
    details: 'It is good and this is a long description to test the db and the styling cause resataurants may input this amount of detail for the order. It could be longer and longer and up until now even longer.',
    price_cents: 2100,
    active: true
  },

];

function Cart() {
  const [selectedOptions, setSelectedOptions] = useState({});

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




// function Cart() {

// const [items, setItems] = useState([]);

// useEffect(() => {
//   axios.get('/api/user/cart')
//     .then((res) => {
//       setItems(res.data.items);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);


// return (
//   <div className="cart">
//     <h1>Your Cart</h1>
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>
//           <h2>{item.title}</h2>
//           <p>{item.details}</p>
//           <p>{item.price_cents / 100}</p>
//           <button>Remove Item</button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// }

export default Cart;
