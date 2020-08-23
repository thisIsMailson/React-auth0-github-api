import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class Header extends Component {
  onLogin() {
    this.props.onLogin();
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">GitHub Searcher</Navbar.Brand>
        <Nav.Link href="#" onClick={this.onLogin.bind(this)}>
          LogIn
        </Nav.Link>
      </Navbar>
    );
  }
}

export default Header;
