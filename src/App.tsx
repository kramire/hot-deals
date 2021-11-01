import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart, List, Product } from "./pages";
import { Navbar } from "./components";
import { CartType, Role } from "./lib/types";
import styled from "styled-components";

const ContentWrapper = styled.div`
  width: fit-content;
  margin: 2em auto;
`;

const App = () => {
  const [cart, setCart] = useState<CartType>({});
  const [role, setRole] = useState<Role>("user");

  return (
    <Router>
      <Navbar cart={cart} role={role} setRole={setRole} />
      <ContentWrapper>
        <Switch>
          <Route exact path="/cart">
            <Cart cart={cart} setCart={setCart} />
          </Route>
          <Route exact path="/product/:id">
            <Product cart={cart} setCart={setCart} />
          </Route>
          <Route exact path="/">
            <List role={role} />
          </Route>
        </Switch>
      </ContentWrapper>
    </Router>
  );
};

export default App;
