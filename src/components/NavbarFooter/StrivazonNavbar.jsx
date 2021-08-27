import { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

class StrivazonNavbar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">
            <FaStore /> Strivazon
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/BackOffice">
                Back Office
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(StrivazonNavbar);
