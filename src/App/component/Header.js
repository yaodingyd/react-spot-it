import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Spot-It Generator</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/about/">
                  <NavItem eventKey={1}>About</NavItem>
                </LinkContainer>
                <NavItem eventKey={2} href="http://yaodingyd.github.io">Yao</NavItem>
              </Nav>
            </Navbar.Collapse>
        </Navbar>   
      </div>
    );
  }
}

export default Header;