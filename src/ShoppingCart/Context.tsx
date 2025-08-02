import { useState, useContext, createContext } from "react";
import { ShoppingCartContextTypes } from "./types";

//@ts-ignore
export const ShoppingCartContext = createContext<ShoppingCartContextTypes>([]);

export const useShoppingCartContext = () => useContext(ShoppingCartContext);
