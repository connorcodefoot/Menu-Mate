import React from "react";
import UserMenuItem from "./UserMenuItem";
import MenuList from "./MenuList"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import 'components/User/UserMenu.scss';


export default function UserMenu() {

  // SET STATES
  const [isLoading, setLoading] = useState(true);
  const [menus, setMenus] = useState ()

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
        onClick={(id) => {console.log(id)}}
      /> 
    )


  })
  const displayMenus = menus.map((menu) => {
    return (
      <>
      <h1>{menu.title}</h1>
      <ul><UserMenuItem 
        menuID={menu.id}
      /></ul>
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