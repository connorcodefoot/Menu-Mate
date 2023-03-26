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
        console.log(all[0])
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
          <div class="order-items">
            <h5>{item.title}</h5>
            <h5>${item.price_cents / 100}</h5>
          </div>
        </>
      );
    }
  );


return (
  <div>
  {displayOrderItems}
  </div>
);
}