import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function AdminOrderView(props) {

  const [isLoading, setLoading] = useState(true);
  const [orderItems, setOrderItems] = useState();

  useEffect(() => {

    Promise.all([
      axios.get(`/api/admin/orders/${props.id}`),
    ])
      .then((all) => {
        console.log(all[0]);
        setOrderItems(all[0].data.items);
        setLoading(false);
      });

  }, []);

  if (isLoading) {
    return <div> LOADING </div>;
  }

  const displayOrderItems = orderItems.map((item) => {

    return (
      <>
        <tr>
          <td>
            {item.order_item_status}
          </td>
          <td>
            <b>{item.title}</b><br />
            {item.notes && <>Notes: {item.notes}</>}
          </td>
          <td>
            ${item.price_cents / 100}
          </td>
        </tr>
      </>
    );
  });


  return (
    <div>
      <tr>
        <td class="table-status">
          <h6>Status</h6>
        </td>
        <td class="table-item">
          <h6>Item</h6>
        </td>
        <td class="table-price">
          <h6>Price</h6>
        </td>
      </tr>
      {displayOrderItems}
    </div>
  );
}