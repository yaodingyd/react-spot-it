import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/react-spot-it/">Spot-It Generator</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="/react-spot-it/about/">About</NavItem>
                <NavItem eventKey={2} href="http://yaodingyd.github.io">Yao</NavItem>
              </Nav>
            </Navbar.Collapse>
        </Navbar>   
      </div>
    );
  }
}

export default Header;