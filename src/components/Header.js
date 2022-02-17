import React from "react";
import Nav from 'react-bootstrap/Nav'
import { Navbar } from "react-bootstrap";



function Header (){
    return(
        <div >
            <Navbar fixed="top" />
            <Nav variant="pills" defaultActiveKey="/home">
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
        </div>
     
    )
}

export default Header