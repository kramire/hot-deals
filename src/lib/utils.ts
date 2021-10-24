import { CartType } from "./types";

export const padPrice = (price: number) =>
  (Math.round(price * 100) / 100).toFixed(2);

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const totalCartItems = (cart: CartType) =>
  Object.values(cart).reduce((accum, curr) => (accum += curr.quantity), 0);

export const totalCartCost = (cart: CartType) =>
  Object.values(cart).reduce(
    (accum, curr) => (accum += curr.unitPrice * curr.quantity),
    0
  );
