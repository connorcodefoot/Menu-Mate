import React from "react";
import AdminCategoryItem from "./AdminCategoryItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { Context, useContext } from '../../Context/index';
import { useNavigate } from "react-router-dom";
import MenuList from "../User/MenuList";
import 'components/User/UserMenu.scss';

export default function AdminCategories() {
  // SET STATES
  const [isLoading, setLoading] = useState(true);
  const [menus, setMenus] = useState();

  const { state } = useContext(Context);
  const navigate = useNavigate();

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

  const redirect = (title) => {
    navigate('/admin/categories/new', {state: {title}})
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
        <tr>
          <td>{menu.title}</td>
          <td>
            <AdminCategoryItem
              menuID={menu.id}
            />
          </td>
        </tr>
      </>
    );
  });

  // RETURN MENU

  return (
    <>
      <ul>{displayMenuButtons}</ul>
      <button onClick={() => redirect()}>Add Menu Category</button>
      <table>
        <tr>
          <th>Menu Category</th>
          <th>Items in Category</th>
        </tr>
        {displayMenus}
      </table>
    </>
  );
};