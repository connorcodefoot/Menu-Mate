import React from "react";
import AdminMenuItem from "./MenuItem/index";
import axios from "axios";
import { useEffect, useState } from "react";
import { Context, useContext } from '../../Context/index';
import MenuList from "../User/MenuList"
import 'components/User/UserMenu.scss'

export default function AdminMenu() {
  // SET STATES
  const [isLoading, setLoading] = useState(true);
  const [menus, setMenus] = useState ()

  const { state } = useContext(Context);
  

  // LOAD DEFAULT PAGE
  useEffect(() => {

    Promise.all([
      axios.get('/api/user/menus'),
   ])
    .then((all) => {
      setMenus(all[0].data.menus)
      setLoading(false)
    })
  }, [])

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
    )
  })

  const displayMenus = menus.map((menu) => {
    return (
      <>
      <h1>{menu.title}</h1>
      <ul>
      <AdminMenuItem 
        menuID={menu.id}
      />
      </ul>
      </>
    );
  });

  // RETURN MENU

  return (
    <>
      <ul>{displayMenuButtons}</ul>
      <ul>{displayMenus}</ul>
    </>
  );
};