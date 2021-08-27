import { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StrivazonNavbar from "./components/NavbarFooter/StrivazonNavbar";
import Home from "./views/Home";
import BackOffice from "./views/BackOffice";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <StrivazonNavbar />
          <Route path="/" exact component={Home} />
          <Route path="/BackOffice" exact component={BackOffice} />
        </Router>
      </div>
    );
  }
}

export default App;
