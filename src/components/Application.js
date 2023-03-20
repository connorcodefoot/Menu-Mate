import React from "react";

import "components/Application.scss";

import AdminOrders from "pages/AdminOrders"
import AdminPortal from "pages/AdminPortal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "pages/UserHome";

export default function Application(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPortal />}></Route>
        <Route path="/" element={<UserHome />}></Route>

        <Route path="admin/orders" element={<AdminOrders />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
