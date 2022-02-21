import React from "react";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Home (){
return(
    <div>
        <h2>Most Popular Items</h2>
        <Row>
        <Col>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
     </Col>   
    <Col>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
    </Col>
    <Col>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
    </Col>
        </Row>
    </div>
)
}

export default Home