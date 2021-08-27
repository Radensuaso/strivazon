import { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import StrivazonNavbar from "./components/NavbarFooter/StrivazonNavbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <StrivazonNavbar />
          <Route path="/" exact component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
