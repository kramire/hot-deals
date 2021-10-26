import React from "react";
import { Header, Divider } from "semantic-ui-react";
import { ActionButton } from "../../components";
import { padPrice } from "../../lib/utils";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em;
  grid-area: cost;
`;

const CostsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1em;

  div {
    padding: 1em 0;
  }
`;

const TotalWrapper = styled(CostsWrapper)`
  font-weight: bold;
`;

const Price = styled.div`
  text-align: right;
  font-size: 1.25em;
`;

export const CartCost = (props: { total: number }) => {
  const { total } = props;
  const DELIVERY_FEE = 9.99;

  const handleClick = () => window.alert("End of the demo!");

  return (
    <Wrapper>
      <Header size="large">Total</Header>
      <CostsWrapper>
        <div>Subtotal:</div>
        <Price>${padPrice(total)}</Price>
        <div>Delivery:</div>
        <Price>${DELIVERY_FEE}</Price>
      </CostsWrapper>
      <Divider />
      <TotalWrapper>
        <div>Total:</div>
        <Price>${padPrice(total + DELIVERY_FEE)}</Price>
      </TotalWrapper>
      <ActionButton
        handleClick={handleClick}
        content="Checkout"
        style={{ width: "100%" }}
      />
    </Wrapper>
  );
};
