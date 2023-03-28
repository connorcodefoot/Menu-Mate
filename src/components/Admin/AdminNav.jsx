import React from "react";
import 'components/Admin/AdminNav.scss'
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate()


  return (
    <nav class='admin-nav'>
      <div><h6>Logged in as: ADMIN</h6></div>

      <div><h1> Pagliacci's </h1></div>
      <div class="admin-nav-buttons">     
        <button class="admin-nav-button" onClick={() => navigate('/admin/menu')}> Menus </button>
        <button class="admin-nav-button" onClick={() => navigate('/admin/orders')}> Orders </button>
      </div>

    </nav>
  );
}