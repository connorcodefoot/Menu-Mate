import React from "react";
import 'components/Admin/AdminNav.scss'

export default function Navbar() {
  return (
    <nav class='admin-nav'>
      <div><h6>Logged in as: ADMIN</h6></div>

      <div><h1> ORDERS FOR *RESTAURANT* </h1></div>
      <div class="admin-nav-buttons">
        <form action="/admin/orders">      
        <button class="admin-nav-button"> Menus </button>
        </form>
        <form action="/admin/orders">
        <button type="submit" class="admin-nav-button"> Orders </button>
        </form>
      </div>

    </nav>
  );
}