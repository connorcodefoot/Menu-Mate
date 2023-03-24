import React from 'react';
import { Context, useContext } from 'Context/index';

const CartItem = (props) => {
  const { item } = props;
  const { increase, decrease, removeItem } = useContext(Context);
  return (
    <div className="list-item">
      <img className="list-item-image" src={item.picture} alt={item.name} />
      <div className="list-item-info">
        <span>
          <h3>{item.title}</h3>
          <small>{item.description}</small>
        </span>
        <span style={{ display: 'flex' }}>
          <span>
            <b>Price </b> ${item.price_cents.toFixed(2)/100} <br />
          </span>
          {item.count > 1 && (
            <>
              <span style={{ marginLeft: '1rem' }}>
                <b>Quantity </b>x{item.count}
              </span>
              <span style={{ marginLeft: '1rem' }}>
                <b>Subtotal </b> ${(item.price_cents * item.count).toFixed(2)/100}
              </span>
            </>
          )}
        </span>
        <div>
          <button onClick={() => decrease(item)} className="cart-btn">
            {' '}
            -{' '}
          </button>
          <button onClick={() => removeItem(item.id)} className="remove-btn">
            remove
          </button>
          <button onClick={() => increase(item)} className="cart-btn">
            {' '}
            +{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
