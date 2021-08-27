import { Component } from "react";
import { Container } from "react-bootstrap";
import ProductList from "../components/Products/ProductList";

class Home extends Component {
  render() {
    return (
      <Container>
        <ProductList />
      </Container>
    );
  }
}

export default Home;
