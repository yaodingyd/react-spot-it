import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                Spot-It Generator
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1}>About</NavItem>
                <NavItem eventKey={2} href="http://yaodingyd.github.io">Yao</NavItem>
              </Nav>
            </Navbar.Collapse>
        </Navbar>   
      </div>
    );
  }
}

export default Header;