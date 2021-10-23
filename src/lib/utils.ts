export const padPrice = (price: number) =>
  (Math.round(price * 100) / 100).toFixed(2);
