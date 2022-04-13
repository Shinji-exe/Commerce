import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, requirePropFactory} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from "../../assets/shop-icon-png-5.jpg"
import useStyles from "./styles"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import "./Navbar.css"
import FilterProduct from '../../FilterProduct'

 const Navbar = ({ totalItems }) => {
     const classes = useStyles();
     const location = useLocation()
  return (
    <>
    <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                {/* <img src={logo} alt="Shinjuku" height="25px" className={classes.image}/> */}
                Reactive
            </Typography>
            <div className={classes.grow}/>
            {location.pathname == "/" && (
            <div className={classes.button}>
                {/* <Link to = "/cart"></Link> */}
                <Link to = "/products">Products</Link>
                {/* <Link to = "/apperal">Apperal</Link> */}
         <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
             <Badge badgeContent={totalItems} color="secondary">
                 <ShoppingCart/>
                 
             </Badge>
            
         </IconButton>
            </div> )} 
            {location.pathname === "/products" && (
            <div className={classes.button}>
                {/* <Link to = "/cart"></Link> */}
                <Link to = "/products">Products</Link>
                {/* <Link to = "/apperal">Apperal</Link> */}
         <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
             <Badge badgeContent={totalItems} color="secondary">
                 <ShoppingCart/>
                 
             </Badge>
         </IconButton>
            </div> )} 
            {location.pathname === "/apperal" && (
            <div className={classes.button}>
                {/* <Link to = "/cart"></Link> */}
                <Link to = "/products">Products</Link>
                {/* <Link to = "/apperal">Apperal</Link> */}
         <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
             <Badge badgeContent={totalItems} color="secondary">
                 <ShoppingCart/>
                 
             </Badge>
         </IconButton>
            </div> )} 
            {location.pathname === `/product-view/:id` && (
            <div className={classes.button}>
                {/* <Link to = "/cart"></Link> */}
                <Link to = "/products">Products</Link>
                {/* <Link to = "/apperal">Apperal</Link> */}
         <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
             <Badge badgeContent={totalItems} color="secondary">
                 <ShoppingCart/>
                 
             </Badge>
         </IconButton>
            </div> )} 
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar;