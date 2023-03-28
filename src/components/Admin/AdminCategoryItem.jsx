import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Context, useContext } from '../../Context/index';

import 'components/User/UserMenu.scss';

export default function AdminCategoryItem(props) {
  // SET STATES
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState();

  const { state } = useContext(Context);

  // LOAD DEFAULT PAGE
  useEffect(() => {

    Promise.all([
      axios.get(`/api/user/menus/${props.menuID}`),
    ])
      .then((all) => {
        setItems(all[0].data.items);
        setLoading(false);
      });

  }, []);

  if (isLoading) {
    return <div> LOADING </div>;
  }

  const itemCount = items.length 

  // RETURN MENU

  return (
    <>
     {itemCount}
    </>
  );
};