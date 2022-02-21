import {useState, useEffect} from 'react';
import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Product= ()=>{
  const [productid, setproductId] = useState([])
  const [producttitle, setproductTitle] = useState([])
  const [productimage, setproductImage] = useState([])
  const [productprice, setproductPrice] = useState([])


  useEffect(() => {
      fetch("https://fakestoreapi.com/products")
          .then(res => res.json())
          .then(data => {
              setproductId(data.id)
              setproductTitle(data.title)
              setproductImage(data.image)
              setproductPrice(data.price)
              console.log(data.image[0])
          })
  }, [])


return(
    <div style={{display:'block', width:1800, padding:30}}>
    <Container>
        <Row>
        <Col>
        <Card.Img/>
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
    </Container>   

    </div>
)
}

export default Product;