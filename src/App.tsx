import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart, List, Product } from "./pages";
import { Navbar } from "./components";
import styled from "styled-components";

const ContentWrapper = styled.div`
  width: fit-content;
  margin: 2em auto;
`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <ContentWrapper>
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route exact path="/">
            <List />
          </Route>
        </Switch>
      </ContentWrapper>
    </Router>
  );
};

export default App;
