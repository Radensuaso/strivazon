import { Component } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

class SingleProduct extends Component {
  render() {
    return (
      <Card className="single-product">
        <div className="position-relative">
          <Card.Img variant="top" src={this.props.product.image} />
          <Badge bg="warning" text="dark" className="position-absolute">
            €{this.props.product.price}
          </Badge>
        </div>
        <Card.Body className="text-center">
          <Card.Title>{this.props.product.name}</Card.Title>
          <Button variant="primary" className="me-3 mb-3">
            Add to <FaShoppingCart />
          </Button>
          <Button variant="success" className="me-3 mb-3">
            Reviews
          </Button>
          <Button variant="secondary" className="me-3 mb-3">
            Edit Product
          </Button>
          <Card.Text>{this.props.product.category.name}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleProduct;
