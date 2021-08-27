import { Component } from "react";
import { Container } from "react-bootstrap";
import ProductList from "../components/Products/ProductList";

class Home extends Component {
  render() {
    return (
      <Container className="mt-5">
        <ProductList />
      </Container>
    );
  }
}

export default Home;
