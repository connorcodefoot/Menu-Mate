import React from "react";

import "components/Application.scss";

import AdminOrders from "pages/AdminOrders"
import AdminPortal from "pages/AdminPortal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "pages/UserHome";
import MenuItem from "./MenuItem";
import UserCart from "pages/UserCart";
import UserMenu from "pages/UserMenu";
import { Context } from '../Context/index'
import { useState } from "react";
import CartView from "pages/CartView";
import { data } from '../data'
import { NavLink } from "react-router-dom";

export default function Application() {

  const [state, setState] = useState({
    data: data,
    cart: [],
  });

  const addToCart = (item) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === item.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...item, count: 1 }],
    });
    console.log(state.cart)
  };

  const increase = (item) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (item) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  const removeItem = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
  };

  const cartItemCount = state.cart.reduce(
    (acc, data) => (acc += data.count),
    0
  );

  return (
    <Context.Provider
    value={{ state: state, addToCart, increase, decrease, removeItem}}
  >
    <BrowserRouter>
      <NavLink className="btn" activeClassName="active" to="/cart">
          Cart ({cartItemCount > 0 ? cartItemCount : 0})
        </NavLink>
      <Routes>
        <Route path="/admin" element={<AdminPortal />}></Route>
        <Route path="/" element={<UserHome />}></Route>
        <Route path="/user/menu" element={<UserMenu />}></Route>
        <Route path="/menu" element={<MenuItem />}></Route>
        <Route path="admin/orders" element={<AdminOrders />}></Route>
        <Route path="user/cart" element={<UserCart />}></Route>
        <Route path="/cart" element={<CartView />}></Route>
      </Routes>
    </BrowserRouter>
    </Context.Provider>
  );
}
