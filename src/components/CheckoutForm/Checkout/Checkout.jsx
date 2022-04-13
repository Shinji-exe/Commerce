import React, { useState, useEffect } from 'react'
import useStyles from "./styles"
import { StepLabel } from '@material-ui/core';
import { Paper,stepper, Step, Typography, CircularProgress, Divider, Button, Stepper} from '@material-ui/core'
import AddressForm from './AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce';
import { Link } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { useNavigate } from 'react-router';
// import useHistory from "react-router"



const steps = ["Shipping Address", "payment details"];


const Checkout = ({cart, order, onCaptureCheckout, error}) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const [finished, setFinished] = useState(false)
    const classes = useStyles();
    const navigate = useNavigate();
    // const history = useHistory();

useEffect(() => {
const generateToken = async () => {
    try{
    const token = await commerce.checkout.generateToken(cart.id,{type:"cart"})
    
    console.log(token)

    setCheckoutToken(token)
    }catch(error){
// history.push("/")
navigate("/")
    }
}
generateToken()
},[cart]);


const next = (data) => {
 setShippingData(data)

 nextStep();
}

const nextStep = () => setActiveStep((previousActiveStep) => previousActiveStep + 1)
const backStep = () => setActiveStep((previousActiveStep) => previousActiveStep - 1)


const timeout = ()=> {
    setTimeout(() => {
        setFinished(true)
    }, 3000);
}

    const Confirmation = () => order.customer ? (
        <>
        <div>
        <Typography variant = "h5">Thank you for your purchase, {order.customer.firstName} {order.customer.lastName}</Typography>
        <Divider className={classes.divider}/>
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    ) : (
        <div className={classes.spinner}>
           <CircularProgress />
        </div>
    );

    if(error){
        <>
          <Typography variant="h5">Error: {error}</Typography>
        </>
    }

    const Form = () => activeStep === 0
     ? <AddressForm checkoutToken={checkoutToken} next={next}/>
     : <PaymentForm shippingData={shippingData} checkoutToken = {checkoutToken} nextStep={nextStep} backStep={backStep}  onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>


  return (
   
    <>
    <CssBaseline />
    <div className={classes.toolbar}/>
    <main className={classes.layout}>
        <Paper className={classes.paper}>
     <Typography variant="h4" align="center">Checkout</Typography>
     <Stepper activeStep={activeStep} className={classes.stepper}>
     {steps.map((step) => (
         <Step key={step}>
        <StepLabel>{step}</StepLabel>
        </Step>
     ))}
     </Stepper>
     {activeStep === steps.length ?<Confirmation /> : checkoutToken && <Form/>}
    </Paper>
    </main>
    </>
  )
}

export default Checkout