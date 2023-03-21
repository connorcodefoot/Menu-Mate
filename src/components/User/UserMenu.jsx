import React from "react";
import UserMenuItem from "./UserMenuItem";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function AdminOrders() {

  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState()

  useEffect(() => {
    axios.get('/api/user/menus')
      .then((res) => {
        setItems(res.data.items)
        setLoading(false)
      });
  }, []);

  if (isLoading) {
    return <div> LOADING </div>
  }

  const displayItems = items.map((item) => {
    return (
      <UserMenuItem
        key={item.id}
        id={item.id}
        title={item.title}
        details={item.details}
        price={item.price_cents}
      />
    );
  });

  return (
    <div class="admin-orders">
      {displayItems}
    </div>
  )
}