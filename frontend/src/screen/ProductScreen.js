import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Row,Col,Image,ListGroup,Card,Button } from 'react-bootstrap'
import {Rating}from '../components/Rating'
import axios from 'axios'

function ProductScreen({match}) {
    const[product,setProduct] = useState([])

    useEffect(() =>{
      async  function fetchProducts() { 
   const {data} = await axios.get('/api/products/{match.params.id}')
   setProduct(data)
      }
      fetchProducts()
    },[])
    return (
        <div>
           <Link to = '/' className = 'btn btn-light my-3'> GO BACK </Link>
           <Row>
               <Col md ={6}>
                   <Image src={product.image} alt={product.name} fluid/>
               </Col>
               <Col md={3}>
                   <ListGroup variant = "flush">
                       <ListGroup.Item>a
                           <h3>{product.name}</h3>
                       </ListGroup.Item>

                       <ListGroup.Item>
                           Price : {product.price}
                       </ListGroup.Item>

                       <ListGroup.Item>
                            Rating : {product.rating} from {product.numReviews} reviews
                       </ListGroup.Item>
                       
                        <ListGroup.Item>
                                          Description:  {product.description}
                        </ListGroup.Item>
                   </ListGroup>
               </Col>
               <Col md ={3}>

                   <Card>
                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                           <Row>
                              <strong> <Col>Price : {product.price}</Col></strong>
                           </Row>
                       </ListGroup.Item>

                      <ListGroup.Item>
                           <Row>
                              <strong> <Col>Status: {product.countInStock} </Col>
                              <Col> {product.countInStock > 0 ? 'In STOCK ': 'OUT OF STOCK'}</Col></strong>
                           </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                          <Button className='button-block' disabled = {product.countInStock === 0} type = 'button'>
                              ADD TO CART
                          </Button>

                          <Button className='button-block' disabled = {product.countInStock === 0} type = 'button'>
                              BUY NOW
                          </Button>

                      </ListGroup.Item>
                   </ListGroup>
                   </Card>
               </Col>
           </Row>
        </div>
    )
}

export default ProductScreen
