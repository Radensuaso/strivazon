import { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { fetchProducts } from "../../tools/fetchTools";
import SingleProduct from "./SingleProduct";

const ProductList = () => {
  const [products, setProducts] = useState({ data: [], loading: true });
  const [query, setQuery] = useState("");

  //=================component did update =============
  useEffect(() => {
    fetchProducts(query, setProducts);
  }, [query]);

  //==============Component Did Mount ====================
  useEffect(() => {
    fetchProducts(query, setProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Row>
        <Form.Label column="lg" lg={2}>
          Search Products
        </Form.Label>
        <Col>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Search Products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="product-list mt-5">
        {!products.loading &&
          products.data.map((p) => (
            <Col key={p.id} xs={12} md={4} lg={3} className="mb-4">
              <SingleProduct product={p} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default ProductList;
