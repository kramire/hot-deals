import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Header, Icon, Label, Button } from "semantic-ui-react";
import { CartType, Role } from "../lib/types";
import { totalCartItems } from "../lib/utils";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > :last-of-type {
    margin-left: 1em;
  }
`;

const OutterWrapper = styled(Wrapper)`
  height: 10vh;
  padding: 1.5em;

  box-shadow: 0px 5px 3px #ccc;
`;

const CartCount = styled(Label)`
  &&&&& {
    left: 99%;
    top: 10px;
  }
`;

const RoleButton = styled(Button)`
  &&&&& {
    @media screen and (max-width: 600px) {
      font-size: 8px;
    }
  }
`;

const Logo = () => (
  <Header as="h2">
    <Icon name="fire" color="orange" />
    <Header.Content>Hot Deals</Header.Content>
  </Header>
);

interface NavbarProps {
  cart: CartType;
  role: Role;
  setRole(value: Role): void;
}

export const Navbar = (props: NavbarProps) => {
  const totalItems = useMemo(() => totalCartItems(props.cart), [props.cart]);

  const handleRoleChange = (value: Role) => () => props.setRole(value);

  return (
    <OutterWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <Wrapper>
        <Button.Group>
          <RoleButton
            onClick={handleRoleChange("user")}
            active={props.role === "user"}
          >
            User
          </RoleButton>
          <RoleButton
            onClick={handleRoleChange("admin")}
            active={props.role === "admin"}
          >
            Admin
          </RoleButton>
        </Button.Group>
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
    </OutterWrapper>
  );
};
