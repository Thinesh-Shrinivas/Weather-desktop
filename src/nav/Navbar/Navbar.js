import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";

class NavBarComponet extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar color="light" expand="md" light>
        {!this.props.loginFlag ? (
          <NavbarBrand href="/">Weather</NavbarBrand>
        ) : (
          <NavbarBrand href="/home">home</NavbarBrand>
        )}
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            {this.props.loginFlag ? (
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
            ) : (
              ""
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBarComponet;
