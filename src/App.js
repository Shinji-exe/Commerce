import React from 'react';
import { useState, useEffect } from 'react';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import { commerce } from './lib/commerce';
import { Cart } from './components';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import { CssBaseline } from '@material-ui/core';
import Home from './components/Home/Home';
import Footer from './Footer/Footer';
import ProductDetails from './components/Products/ProductDetails';
import Catagory from './components/Catagories/Catagory';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';


function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [catagories, setCatagories] = useState([])
  const [cart, setCarts] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')


const fetchProducts = async () => {
const {data} = await commerce.products.list();


 setProducts(data)
}

const fetchCatagory = async () => {
const {data} = await commerce.categories.list();

setCatagories(data)
  
}

const fetchCart = async () => {

  setCarts(await commerce.cart.retrieve())
}

const handleAddToCart = async (productId, quantity) => {
const {cart} = await commerce.cart.add(productId, quantity);

setCarts(cart)
}

const handleUpdateCartQty = async (productId, quantity) => {
  const {cart} = await commerce.cart.update(productId, {quantity});

  setCarts(cart)
}

const handleRemoveFromCart = async (productId) => {
  const cart = await commerce.cart.remove(productId)
  setCarts(cart)
}

const handleEmptyCart = async() => {
const {cart} = await commerce.cart.empty();
setCarts(cart)
}

const refreshCart = async() => {
const newCart = await commerce.cart.refresh()
setCarts(newCart);
}

const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
try{
const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
setOrder(incomingOrder);
refreshCart();
}catch(error){
setErrorMessage(error.data.error.message)
}
}

useEffect(() => {
fetchProducts();
fetchCatagory();
fetchCart();
},[]);

const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

console.log(products)
console.log(catagories)
console.log(cart)

  return (
      <Router>
      <div style={{display: 'flex'}}>
      <CssBaseline/>
      <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle}/>
      {/* <HamburgerMenu /> */}


      <Routes>

      <Route exact path = "/" element={<Home/>}/>

      <Route exact path = "/products" element={<Products products={products} onAddToCart={handleAddToCart}/>}/>

      <Route exact path = "/apperal" element={<Catagory/>}/>

      <Route exact path = "/cart" element={<Cart cart={cart}  
         handleUpdateCartQty={handleUpdateCartQty}
         handleRemoveFromCart={handleRemoveFromCart}
         handleEmptyCart={handleEmptyCart}/>} 
        
      />
      <Route exact path = "/checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>}/>

      <Route exact path = "/product-view/:id" element={<ProductDetails 
         onAddToCart={handleAddToCart}
         handleUpdateCartQty={handleUpdateCartQty}
         handleRemoveFromCart={handleRemoveFromCart}/>}/>
      
      </Routes>
      </div>
      <Footer/>
      </Router>
      
  );
}

export default App;