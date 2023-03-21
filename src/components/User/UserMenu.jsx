import React from "react";
import UserMenuItem from "./UserMenuItem";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import 'components/User/UserMenu.scss'

export default function UserMenu() {

  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState()

  useEffect(() => {
    axios.get('/api/user/menus')
      .then((res) => {
        console.log(res)
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
    <div class="user-menu">
      {displayItems}
    </div>
  )
}