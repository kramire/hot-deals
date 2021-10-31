import React from "react";
import { ImageWrapper } from "../../components";
import { padPrice } from "../../lib/utils";
import { CartType, Item } from "../../lib/types";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em;

  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const MiddleWrapper = styled.div`
  > div {
    padding: 1em 0;
  }
`;

const RightWrapper = styled(MiddleWrapper)`
  text-align: right;
`;

const TotalPrice = styled.div`
  font-weight: bold;
`;

const DeleteWrapper = styled.div`
  font-style: italic;
  font-size: 12px;
`;

const DeleteIcon = styled(Icon)`
  &&&&& {
    margin-left: 1em;

    :hover {
      cursor: pointer;
    }
  }
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
    <Wrapper>
      <ImageWrapper>
        <img src={item.image} alt="item img" />
      </ImageWrapper>
      <MiddleWrapper>
        <div>{item.title}</div>
        <DeleteWrapper>
          Delete
          <DeleteIcon
            name="trash alternate outline"
            onClick={deleteItem(item.id)}
          />
        </DeleteWrapper>
      </MiddleWrapper>
      <RightWrapper>
        <div>{quantity}</div>
        <TotalPrice>${padPrice(quantity * unitPrice)}</TotalPrice>
      </RightWrapper>
    </Wrapper>
  );
};
