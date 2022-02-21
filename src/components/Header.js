import React from "react";
import Nav from 'react-bootstrap/Nav'
import { Navbar } from "react-bootstrap";



function Header (){
    return(
        <div >


            <Navbar bg="dark" variant="dark" expand="lg" >
      <Nav>
<Nav.Item>
  <Nav.Link
    href="">Rony's Shop
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link
  >
  </Nav.Link>
</Nav.Item>
     </Nav>
            <Nav className='m-auto' >

 
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/product">Product</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/about">About</Nav.Link>
  </Nav.Item>
</Nav>
</Navbar>
        </div>
     
    )
}

export default Header