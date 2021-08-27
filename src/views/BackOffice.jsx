import { Component } from "react";
import { Container } from "react-bootstrap";
import FormBackOffice from "../components/forms/FormBackOffice";

class BackOffice extends Component {
  render() {
    return (
      <Container className="mt-5">
        <FormBackOffice />
      </Container>
    );
  }
}

export default BackOffice;
