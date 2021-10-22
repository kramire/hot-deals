import React from "react";
import { Link } from "react-router-dom";
import { Header, Icon } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10vh;
  padding: 1.5em;

  box-shadow: 0px 5px 3px #ccc;
`;

const Logo = () => (
  <Header as="h2">
    <Icon name="fire" color="orange" />
    <Header.Content>Hot Deals</Header.Content>
  </Header>
);

export const Navbar = () => (
  <Wrapper>
    <Link to="/">
      <Logo />
    </Link>
    <Link to="/cart">
      <Icon name="cart" size="large" color="grey" />
    </Link>
  </Wrapper>
);
