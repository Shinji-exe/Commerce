import React from 'react'
import { useState, useEffect } from 'react'
import {commerce} from "../../lib/commerce.js"
import { Grid, Button, Container, Typography, Card, IconButton, CardContent } from '@material-ui/core'
import "./Product/ProductDetail.css"
import {Link} from "react-router-dom"

const ProductDetails = ({item, handleUpdateCartQty, handleRemoveFromCart, onAddToCart}) => {
  const [product, setProducts] = useState({})


      const fetchProduct = async (id) => {
      const response = await commerce.products.retrieve(id);
      const {name, price, image, quantity, description, related_products, inventory} = response;
      setProducts({
      id,
      name,
      image: image.url,
      inventory: inventory.available,
      quantity,
      description,
      price: price.formatted_with_symbol,
      })
  }

useEffect(() =>{
  const id = window.location.pathname.split("/")
fetchProduct(id[2])
},[])

if(product.inventory === 0){
return(
  <div>
 <Container className="product-view">
    <Grid item xs={12} sm={6} md={5} className="image-wrapper">
     <img src = {product.image}/>
    </Grid>
    <Grid item xs={12} md={4} className="text">
  <Typography variant="h2">
    {product.name}
  </Typography>
  <Typography variant="h3">
  Price: {product.price}
  </Typography>
  <Typography variant="p" className="description" dangerouslySetInnerHTML={{__html: product.description}}/>
    

  <Grid container spacing={4}>
    <Typography>
      <Grid className = "inventory">
    Available : Out of Stock
    </Grid>
    </Typography>
    {/* <Button className="btn" aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>Add to Cart</Button> */}
    <Button className="btn"><Link to ="/products">Back</Link></Button>
  </Grid>
    </Grid>
      </Container>

  </div>
)
}

if(!product){
  return(
    <div>
      Loading...
    </div>
  )
}

  return (
    <div>
      <Container className="product-view">
    <Grid item xs={12} sm={8} md={7} className="image-wrapper">
     <img src = {product.image}/>
    </Grid>
    <Grid item xs={12} md={4} className="text">
  <Typography variant="h2">
    {product.name}
  </Typography>
  <Typography variant="h3">
  Price: {product.price}
  </Typography>
  <Typography variant="p" dangerouslySetInnerHTML={{__html: product.description}}/>
    

  <Grid container spacing={4}>
    <Typography>
      <Grid className = "inventory">
    Available : {product.inventory}
    </Grid>
    </Typography>
    <Button className="btn" aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>Add to Cart</Button>
    <Button className="btn"><Link to ="/products">Back</Link></Button>
  </Grid>
    </Grid>
     
      </Container>

      {/* Related Products:
      <Card>
        <CardContent>
      
      </CardContent>
      </Card> */}
      {/* <Grid className="related">
      Related Products:
      <img src = {product.related_products}/>
    </Grid> */}
    </div>
  )
}

export default ProductDetails;