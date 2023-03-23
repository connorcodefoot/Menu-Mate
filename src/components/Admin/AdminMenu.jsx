import React from "react";
import AdminMenuItem from "./MenuItem/index";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import 'components/User/UserMenu.scss'

export default function AdminMenu() {
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
      <AdminMenuItem
        key={item.id}
        id={item.id}
        title={item.title}
        details={item.details}
        price={item.price_cents}
        active={item.active}
      />
    );
  });

  return (
    <div class="user-menu">
      {displayItems}
    </div>
  )
}