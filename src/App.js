import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Page from "./components/Page";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Privacy from "./components/Privacy";

function App() {
  return (
    <Router>
      <Page title="Welcome to Frendzy">
        <Header />
        <Switch>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/">
            <Banner />
            <Product />
          </Route>
        </Switch>
      </Page>
    </Router>
  );
}

export default App;
