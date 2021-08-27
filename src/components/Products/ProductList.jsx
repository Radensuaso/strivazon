import { Component } from "react";
// import { Container, Navbar, Nav } from "react-bootstrap";
import axios from "axios";

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
    this.setState({ products, loading: false });
  };

  componentDidMount = () => {
    this.fetchProducts();
  };

  render() {
    return <div className="product-list"></div>;
  }
}

export default ProductList;
