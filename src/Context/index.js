import { createContext, useContext } from 'react';

const Context = createContext();
const UserContext = createContext()
const OrderContext = createContext()

export { Context, UserContext, OrderContext, useContext };