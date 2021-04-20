import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import {LinkContainer}from 'react-router-bootstrap'
function Header() {
    return (
        <div>
            <header>
             <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to ='/'>
    <Navbar.Brand>eSHOPPING</Navbar.Brand>
    </LinkContainer>
  
    <Nav className="mr-auto">
      <LinkContainer to = '/cart'>
      <Nav.Link>Cart</Nav.Link>
      </LinkContainer>

      <LinkContainer to ='/login'>
      <Nav.Link>Login</Nav.Link>
      </LinkContainer>

    </Nav>
  </Container>
  </Navbar>
            </header>
        </div>
    )
}

export default Header
 