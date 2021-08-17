import { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Page from "./components/Page";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Product from "./components/Product";

function App() {

  return (
    <Router>
      <Page title="Welcome to Frendzy">
        <Header />
        <Banner />
        <Product />
      </Page>
    </Router>
  );
}

export default App;
