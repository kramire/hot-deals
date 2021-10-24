import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Header, Icon, Label } from "semantic-ui-react";
import styled from "styled-components";
import { CartType } from "../lib/types";
import { totalCartItems } from "../lib/utils";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10vh;
  padding: 1.5em;

  box-shadow: 0px 5px 3px #ccc;
`;

const CartCount = styled(Label)`
  right: 10px;
  top: 10px;
`;

const Logo = () => (
  <Header as="h2">
    <Icon name="fire" color="orange" />
    <Header.Content>Hot Deals</Header.Content>
  </Header>
);

export const Navbar = (props: { cart: CartType }) => {
  const totalItems = useMemo(() => totalCartItems(props.cart), [props.cart]);
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/cart">
        <div>
          <Icon name="cart" size="large" color="grey" />
          {totalItems > 0 && (
            <CartCount color="red" circular floating size="small">
              {totalItems}
            </CartCount>
          )}
        </div>
      </Link>
    </Wrapper>
  );
};
