import React from "react";
import UserMenuItem from "./UserMenuItem";
import MenuList from "./MenuList";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import 'components/User/UserMenu.scss';
import { Context, UserContext, useContext } from '../../Context/index';


export default function UserMenu() {

  // SET STATES
  const [isLoading, setLoading] = useState(true);
  const [menus, setMenus] = useState();

  const { state } = useContext(Context);

  const { user } = useContext(UserContext)

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
      />
    );
  });

  const displayMenus = menus.map((menu) => {
    return (
      <>
        <h1 class="menu-categ">{menu.title}</h1>
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
      <div class="menu-btns">
        <ul class="menu-list">{displayMenuButtons}</ul>
      </div>
      <ul>{displayMenus}</ul>
    </>
  );
};