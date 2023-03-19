import React from "react";
import 'components/Admin/AdminNav.scss'

function Navbar() {
  return (
    <nav class='admin-nav'>
      <div>User</div>

      <div> <h1> Menu Mate</h1></div>
      <div>      
        <ul>
        <button class="admin-nav-button"> Menus </button>
        <button class="admin-nav-button"> Orders </button>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;