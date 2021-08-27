import { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import SingleProduct from "./SingleProduct";

class ProductList extends Component {
  state = {
    products: [],
    query: "",
    loading: true,
  };

  //============= function to fetch products ===============
  fetchProducts = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_BASE_URL}/products?name=${this.state.query}`
    );

    const products = response.data;
    this.setState({ products, loading: false });
  };

  //==============Component Did Mount ====================
  componentDidMount = () => {
    this.fetchProducts();
  };

  //=================component did update =============
  componentDidUpdate = (prevProp, prevState) => {
    if (prevState.query !== this.state.query) {
      this.fetchProducts();
    }
  };

  render() {
    return (
      <>
        <Row className="mt-5">
          <Form.Label column="lg" lg={2}>
            Search Products
          </Form.Label>
          <Col>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search Products"
              value={this.state.query}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
          </Col>
        </Row>
        <Row className="product-list mt-5">
          {!this.state.loading &&
            this.state.products.map((p) => (
              <Col key={p.id} xs={12} md={4} lg={3} className="mb-4">
                <SingleProduct product={p} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default ProductList;
