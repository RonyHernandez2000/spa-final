import React from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Home (){
return(
    <div style={{display:'block', height:100, width:1800, padding:30}} >
        <h2>Most Popular Items</h2>
        <Row>
        <Col>
        <Card.Img  className="Card-Img" variant="top" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
    <Card.Body>
    <Card.Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Card.Title>
    <Card.Text>
    $109.95
    </Card.Text>
  </Card.Body>
     </Col>   
    <Col>
    <Card.Img className="Card-Img" variant="top" src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" />
    <Card.Body>
    <Card.Title>WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive</Card.Title>
    <Card.Text>
    $114
    </Card.Text>
  </Card.Body>
    </Col>
    <Col>
    <Card.Img className="Card-Img" variant="top" src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" />
    <Card.Body>
    <Card.Title>Rain Jacket Women Windbreaker Striped Climbing Raincoats</Card.Title>
    <Card.Text>
    $39.99
    </Card.Text>
  </Card.Body>
    </Col>
        </Row>
    </div>
)
}

export default Home