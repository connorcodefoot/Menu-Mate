import React from "react";

import "components/Application.scss";

import AdminOrders from "pages/AdminOrders";
import AdminPortal from "pages/AdminPortal";
import AdminMenu from "pages/AdminMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "pages/UserHome";
import UserCart from "pages/UserCart";
import UserMenuView from "pages/UserMenuView";
import { Context, UserContext, useContext } from '../Context/index';
import { useState } from "react";
import CartView from "pages/CartView";
import { NavLink } from "react-router-dom";
import UserThankyou from "./User/UserThankyou";


export default function Application() {

  const [state, setState] = useState({
    cart: [],
  });

  const [user, setUser] = useState('');


  const addToCart = (item, note) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === item.id)
        ? state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        )
        : [...state.cart, { ...item, count: 1, note }],
    });
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
          ? { ...cartItem, count: cartItem.count - 1 }
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

  const cartTotal = () => {

    let total = 0;

    state.cart.forEach((item) => {
      total += (item.price_cents * item.count);
    });

    return total;

  };

  const emptyCart = () => {
    setState({
      ...state,
      cart: []
    });
  };

  return (
    <Context.Provider
      value={{ state: state, addToCart, increase, decrease, removeItem, cartTotal, emptyCart }}>
      <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/admin" element={<AdminPortal />}></Route>
              <Route path="/" element={<UserHome />}></Route>
              <Route path="/user/menu" element={<UserMenuView />}></Route>
              <Route path="/admin/menu" element={<AdminMenu />}></Route>
              <Route path="admin/orders" element={<AdminOrders />}></Route>
              <Route path="user/cart" element={<UserCart />}></Route>
              <Route path="/cart" element={<CartView />}></Route>
              <Route path="/user/thank-you" element={<UserThankyou />}></Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
    </Context.Provider>
  );
}