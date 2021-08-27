import { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

class FormBackOffice extends Component {
  state = {
    product: {
      categoryId: 1,
      name: "",
      price: "",
      image: "",
    },
  };

  //============Handle change===========
  handleNumberChange = (key, e) => {
    if (e.target.value) {
      this.setState({
        product: {
          ...this.state.product,
          [key]: parseInt(e.target.value, 10),
        },
      });
    } else {
      this.setState({
        product: {
          ...this.state.product,
          [key]: "",
        },
      });
    }
  };

  handleStringChange = (key, e) => {
    this.setState({
      product: { ...this.state.product, [key]: e.target.value },
    });
  };

  //=============Handle submit =====================

  render() {
    return (
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="border p-5">
          <h2 className="text-center">Add a Product</h2>
          <form className="form-back-office">
            <Form.Group controlId="formCategory" className="mt-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={this.state.product.categoryId}
                onChange={(e) => this.handleNumberChange("categoryId", e)}
              >
                <option value="1">Books</option>
                <option value="2">Smartphones</option>
                <option value="3">Clothes</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formName" className="mt-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name of the Product"
                value={this.state.product.name}
                onChange={(e) => this.handleStringChange("name", e)}
              />
            </Form.Group>
            <Form.Group controlId="formPrice" className="mt-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="€"
                value={this.state.product.price}
                onChange={(e) => this.handleNumberChange("price", e)}
              />
            </Form.Group>
            <Form.Group controlId="formImage" className="mt-3">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image Url of the Product"
                value={this.state.product.image}
                onChange={(e) => this.handleStringChange("image", e)}
              />
            </Form.Group>
            <Button type="submit" variant="success" className="mt-3">
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    );
  }
}

export default FormBackOffice;
