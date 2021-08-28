import { Card, Button, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const SingleProduct = (props) => {
  const { product } = props;
  return (
    <Card className="single-product">
      <div className="position-relative">
        <Card.Img variant="top" src={product.image} />
        <Badge bg="warning" text="dark" className="position-absolute">
          €{product.price}
        </Badge>
      </div>
      <Card.Body className="text-center">
        <Card.Title>{product.name}</Card.Title>
        <Button variant="primary" className="me-3 mb-3">
          Add to <FaShoppingCart />
        </Button>
        <Button variant="success" className="me-3 mb-3">
          Reviews
        </Button>
        <Button variant="secondary" className="me-3 mb-3">
          Edit Product
        </Button>
        <Card.Text>{product.category.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
