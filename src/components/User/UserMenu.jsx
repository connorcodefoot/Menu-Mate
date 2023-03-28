import React from "react";
import UserMenuItem from "./UserMenuItem";
import MenuList from "./MenuList";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import 'components/User/UserMenu.scss';
import { Context, UserContext, useContext } from '../../Context/index';
import { Link } from "react-router-dom";



export default function UserMenu() {

  // SET STATES / CONTEXTS
  const [isLoading, setLoading] = useState(true);
  const [menus, setMenus] = useState();
  const [open, setOpen] = useState(false);
  const { state } = useContext(Context);
  const { user } = useContext(UserContext)

  console.log('from menu', user)

  // Add cart to view
  const cartItemCount = state.cart.reduce(
    (acc, data) => (acc += data.count),
    0
  );

  // LOAD DEFAULT PAGE
  useEffect(() => {

    Promise.all([
      axios.get('/api/user/menus'),
    ])
      .then((all) => {
        setMenus(all[0].data.menus);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div> LOADING </div>;
  }

  const displayMenuButtons = menus.map((menu) => {

    return (
      <MenuList
        key={menu.id}
        id={menu.id}
        title={menu.title}
        state={state.cart}
        href={`#${menu.title.replace(/\s+/g, '-').toLowerCase()}`}
      />
    );
  });

  const displayMenus = menus.map((menu) => {
    return (
      <>
        <h1 id={menu.title.replace(/\s+/g, '-').toLowerCase()} class="menu-categ">{menu.title}</h1>
        <ul>
          <UserMenuItem
            menuID={menu.id}
            cart={state.cart}
          />
        </ul>
      </>
    );
  });

  // RETURN MENU

  return (
    <>
      <div className="nav">
        <div class="menu-btns">
          <ul class="menu-list">{displayMenuButtons}</ul>
        </div>
      </div>
      <ul>{displayMenus}</ul>
      {cartItemCount > 0 && (
          <Link className="btn-cart" to="/cart">
            <div className="cart-icon">
              <div className="cart-count">{cartItemCount}</div>
              <div className="cart-text">Cart</div>
            </div>
          </Link>
        )}
    </>
  );
};