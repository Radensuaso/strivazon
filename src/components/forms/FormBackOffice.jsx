import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const FormBackOffice = () => {
  const [productToPost, setProductToPost] = useState({
    categoryId: 1,
    name: "",
    price: "",
    image: "",
  });

  //============Handle change===========
  const handleNumberChange = (key, e) => {
    if (e.target.value) {
      setProductToPost({
        ...productToPost,
        [key]: parseInt(e.target.value, 10),
      });
    } else {
      setProductToPost({
        ...productToPost,
        [key]: "",
      });
    }
  };

  const handleStringChange = (key, e) => {
    setProductToPost({
      ...productToPost,
      [key]: e.target.value,
    });
  };

  //=============Handle submit =====================

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6} className="border p-5">
        <h2 className="text-center">Add a Product</h2>
        <form className="form-back-office">
          <Form.Group controlId="formCategory" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={productToPost.categoryId}
              onChange={(e) => handleNumberChange("categoryId", e)}
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
              value={productToPost.name}
              onChange={(e) => handleStringChange("name", e)}
            />
          </Form.Group>
          <Form.Group controlId="formPrice" className="mt-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="€"
              value={productToPost.price}
              onChange={(e) => handleNumberChange("price", e)}
            />
          </Form.Group>
          <Form.Group controlId="formImage" className="mt-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image Url of the Product"
              value={productToPost.image}
              onChange={(e) => handleStringChange("image", e)}
            />
          </Form.Group>
          <Button type="submit" variant="success" className="mt-3">
            Submit
          </Button>
        </form>
      </Col>
    </Row>
  );
};

export default FormBackOffice;
