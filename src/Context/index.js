import { createContext, useContext } from 'react';

const Context = createContext();
const UserContext = createContext({user: {}})

export { Context, UserContext, useContext };