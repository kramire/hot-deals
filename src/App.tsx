import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart, List, Product } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
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
    </Router>
  );
};

export default App;
