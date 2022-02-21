import {useState, useEffect} from 'react';
import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const URL ="https://fakestoreapi.com/products"
const requestData = () => fetch(URL).then(res=> res.json());

const Product= ()=>{

const [data,setData] = useState([]);
useEffect(()=>{
  requestData().then(data=> setData(data))
},[]);

console.log(data.image)
return(
  
    <div key={data.id} className='div-product'>
    {data.map(data =>(
<div key={data.id}> 
<Container>
        <Row>
        <Col>
        <Card.Img className="Card-Img" src={data.image}/>
    <Card.Body>
    <Card.Title>{data.title}</Card.Title>
    <Card.Text>
     ${data.price}
    </Card.Text>
  </Card.Body>
     </Col>   
     </Row>
    </Container>   
</div>
    ))}
    </div>
)
}

export default Product;