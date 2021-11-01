import React from "react";
import { CustomIcon, ItemLayout } from "../../components";
import { padPrice } from "../../lib/utils";
import { CartType, Item } from "../../lib/types";
import styled from "styled-components";

const TotalPrice = styled.div`
  font-weight: bold;
`;

const DeleteWrapper = styled.div`
  font-style: italic;
  font-size: 12px;
`;

export const CartItem = (props: {
  item: Item;
  cartCounts: { quantity: number; unitPrice: number };
  cart: CartType;
  setCart: (value: CartType) => void;
}) => {
  const { item, cartCounts, cart, setCart } = props;
  const { quantity, unitPrice } = cartCounts;

  const deleteItem = (itemId: string) => () => {
    const copyCart = JSON.parse(JSON.stringify(cart));
    delete copyCart[itemId];
    setCart(copyCart);
  };

  return (
    <ItemLayout
      imgSrc={item.image}
      middle={
        <>
          <div className="title">{item.title}</div>
          <DeleteWrapper>
            Delete
            <CustomIcon
              name="trash alternate outline"
              handleClick={deleteItem(item.id)}
            />
          </DeleteWrapper>
        </>
      }
      right={
        <>
          <div>{quantity}</div>
          <TotalPrice>${padPrice(quantity * unitPrice)}</TotalPrice>
        </>
      }
    />
  );
};
