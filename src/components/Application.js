import React from "react";

import "components/Application.scss";

import AdminOrders from "pages/AdminOrders"
import AdminPortal from "pages/AdminPortal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "pages/UserHome";
import UserCart from "pages/UserCart";
import UserMenu from "pages/UserMenu";
import AdminMenu from "pages/AdminMenu";

export default function Application(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPortal />}></Route>
        <Route path="/" element={<UserHome />}></Route>
        <Route path="/user/menu" element={<UserMenu />}></Route>
        <Route path="/admin/menu" element={<AdminMenu />}></Route>
        <Route path="admin/orders" element={<AdminOrders />}></Route>
        <Route path="user/cart" element={<UserCart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
