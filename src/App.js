import { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Page from "./components/Page";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Product from "./components/Product";

function App() {

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up", y);
      } else if (y < window.scrollY) {
        console.log("scrolling down", y);
      }
      setY(window.scrollY);
    }, [y]
  );
  
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
  
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

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
