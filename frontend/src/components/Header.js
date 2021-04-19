import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
function Header() {
    return (
        <div>
            <header>
            <>
            <Container>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">eSHOPPING</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/cart"><i className = 'fas fa-shopping-cart'></i>Cart</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  </Navbar>
  </Container>
</>
            </header>
        </div>
    )
}

export default Header
