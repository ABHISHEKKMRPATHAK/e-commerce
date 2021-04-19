import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import {  LinkContainer} from 'react-router-bootstrap'
function Header() {
    return (
        <div>
            <header>
            <>
            <Container>
            <Navbar bg="dark" variant="dark">
    <LinkContainer to ='/'>
    <Navbar.Brand>eSHOPPING</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/cart"><i className = 'fas fa-shopping-cart'></i>Cart</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  </LinkContainer>
  </Navbar>
  </Container>
</>
            </header>
        </div>
    )
}

export default Header
