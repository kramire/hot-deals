export const padPrice = (price: number) =>
  (Math.round(price * 100) / 100).toFixed(2);

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
