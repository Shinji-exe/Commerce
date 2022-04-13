import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product';
import useStyles from "./styles1"
import FilterProduct from '../../FilterProduct';
import SearchBar from 'material-ui-search-bar';

 const Products = ({products, onAddToCart}) => {
  const classes = useStyles()
  return (
    <div>
      {/* <FilterProduct /> */}
      
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
         {products.map((product) => (
             <Grid item key={product.id} xs={12} md={4} lg={3}>
                 <Product product={product} onAddToCart={onAddToCart}/>
                 </Grid>
         ))}
        </Grid>
    </main>
    </div>
  )
}


export default Products;