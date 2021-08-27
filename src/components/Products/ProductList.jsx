import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import SingleProduct from "./SingleProduct";

class ProductList extends Component {
  state = {
    products: [],
    loading: true,
  };

  fetchProducts = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_BASE_URL}/products`
    );

    const products = response.data;
    console.log(products);
    this.setState({ products, loading: false });
  };

  componentDidMount = () => {
    this.fetchProducts();
  };

  render() {
    return (
      <Row className="product-list mt-5">
        {!this.state.loading &&
          this.state.products.map((p) => (
            <Col key={p.id} xs={12} md={4} lg={3} className="mb-4">
              <SingleProduct product={p} />
            </Col>
          ))}
      </Row>
    );
  }
}

export default ProductList;
