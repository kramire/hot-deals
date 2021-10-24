import React, { useMemo } from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";
import { CartType } from "../../lib/types";
import { padPrice, totalCartCost, totalCartItems } from "../../lib/utils";

const Wrapper = styled.div`
  margin: 4em 8em;

  display: grid;
  grid-gap: 2em;
  grid-template-columns: 2fr 1fr;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: calc((90vh - 4em) / 2) 1fr;
    grid--
  }
`;

export const Cart = (props: {
  cart: CartType;
  setCart: (value: CartType) => void;
}) => {
  const { cart, setCart } = props;
  const totalItems = useMemo(() => totalCartItems(cart), [cart]);
  const totalCost = useMemo(() => totalCartCost(cart), [cart]);

  return (
    <Wrapper>
      <div>
        <Header size="large">
          {`Cart: ${totalItems} ${totalItems === 1 ? "Item" : "Items"}`}
        </Header>
      </div>
      <div>
        <Header size="large">{`Total: $${padPrice(totalCost)}`}</Header>
      </div>
    </Wrapper>
  );
};
