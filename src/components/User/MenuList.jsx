import React from "react";
import 'components/User/UserMenu.scss';

export default function MenuList(props) {

  const { href, title } = props;

  return (
    <li
      onClick={() => { }}
    >
      <div class="menu-list">
        <a href={href} className="menu-btns">{title}</a>
      </div>
    </li>
  );

}