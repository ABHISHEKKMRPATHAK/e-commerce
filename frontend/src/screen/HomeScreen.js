import React,{useState,useEffect} from 'react'
import Product from '../components/Product'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios'

function HomeScreen() {
    const[products,setProducts] = useState([])

    useEffect(() =>{
      async  function fetchProducts() { 
   const {data} = await axios.get('/api/products/')
   setProducts(data)
      }
      fetchProducts()
    },[])
    return (
        <div>
            <h1>AVAILABLE ITEMS</h1>
            <Row>
                {products.map(product =>(
                  <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
                </Col>
                )
                )}
            </Row>
        </div>
    )
                }
export default HomeScreen
