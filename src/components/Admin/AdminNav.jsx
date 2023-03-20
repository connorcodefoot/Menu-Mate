import React from "react";
import 'components/Admin/AdminNav.scss'

export default function Navbar() {
  return (
    <nav class='admin-nav'>
      <div>User</div>

      <div> <h1> Menu Mate</h1></div>
      <div>      
        <ul>
        <button class="admin-nav-button"> Menus </button>
        <form action="/admin/orders">
        <button type="submit" class="admin-nav-button"> Orders </button>
        </form>
        </ul>
      </div>

    </nav>
  );
}