import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { IconButton, Container } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from '../styles'
import FilterProduct from '../../../FilterProduct';
import {Link} from "react-router-dom"
import "../Product/Product.css"
import SearchBar from "material-ui-search-bar"





 const Product = ({product, onAddToCart}) => {
     const classes = useStyles();
     console.log(product)

     if(product.inventory.available === 0){
    return(
        <div>
           
           
            <Link to={`/product-view/${product.id}`}>
    <Card className={classes.root}>
<CardMedia className={classes.media} image={product.image.url} title={product.name} />
<CardContent>
    <div className={classes.cardContent}>
<Typography variant="h5" gutterBottom>
{product.name}
</Typography>
<Typography variant="h5" gutterBottom>
{product.price.formatted_with_symbol}
</Typography>
    </div>
    {/* <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/> */}
    <Typography variant="p" gutterBottom>
    Out of Stock
    </Typography>
</CardContent>
<Typography variant="subtitle2" gutterBottom>
    Available Soon
</Typography>
<Link to={`/product-view/${product.id}`}>
<Button>View</Button>
</Link>
    </Card>
    </Link>
</div>
    )
    }

    // if(){

    // }
    
     
  return (
    <div>
{/* <FilterProduct/> */}
    <Card className={classes.root}>
<CardMedia className={classes.media} image={product.image.url} title={product.name} />
<CardContent>
    <div className={classes.cardContent}>
<Typography variant="h5" gutterBottom>
{product.name}
</Typography>
<Typography variant="h5" gutterBottom>
{product.price.formatted_with_symbol}
</Typography>
    </div>
    {/* <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/> */}
    <Typography variant="p" gutterBottom>
    Available: {product.inventory.available}
    </Typography>
</CardContent>
<Link to={`/product-view/${product.id}`}>
<Button>View</Button>
    </Link>
<CardActions disableSpacing className={classes.CardActions}>
<IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
    <AddShoppingCart/>
</IconButton>
</CardActions>
    </Card>
    
</div>
  )
}

export default Product;