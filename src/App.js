import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Page from "./components/Page";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <Page title="Welcome to Frendzy">
        <Header />
        <Banner />
      </Page>
    </Router>
  );
}

export default App;
