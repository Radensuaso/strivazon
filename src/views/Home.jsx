import { Container } from "react-bootstrap";
import ProductList from "../components/Products/ProductList";

const Home = () => {
  return (
    <Container className="mt-5">
      <ProductList />
    </Container>
  );
};

export default Home;
