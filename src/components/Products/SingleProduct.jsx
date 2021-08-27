import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

class SingleProduct extends Component {
  render() {
    return (
      <Card className="single-product">
        <Card.Img variant="top" src={this.props.product.image} />
        <Card.Body>
          <Card.Title>{this.props.product.name}</Card.Title>
          <Card.Text>
            <span>
              <strong>Price:</strong> €{this.props.product.price}
            </span>
          </Card.Text>
          <Button variant="primary">
            Add to <FaShoppingCart />
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleProduct;
