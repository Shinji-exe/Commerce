import React from 'react'
import Commerce from '@chec/commerce.js'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from "../CheckoutForm/Checkout/Review" 

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_TEST_KEY)

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY)


const PaymentForm = ({ checkoutToken, shippingData, backStep, onCaptureCheckout, nextStep, timeout }) => {
  const handleSubmit = async (event, elements, stripe) => {
  event.preventDefault();


  if(!stripe || !elements)return;


  const cardElement = elements.getElement(CardElement)

  const {error, paymentMethod} = await stripe.createPaymentMethod({type: 'card', card: cardElement });

   if(error){
     console.log(error);
   } else {
     const orderData = {
       line_items: checkoutToken.live.line_items,
       customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
       shipping: { 
        name: 'Primary',
        street: shippingData.address1,
         town_city: shippingData.city,
          country_state: shippingData.shippingSubdivision,
           zip: shippingData.zip,
            country: shippingData.shippingCountry,
          },
      fulfillment: {shipping_method: shippingData.shippingOption},
      billing: {
        name: "Timothy Lundy",
        street: '722 Remsen Ave',
        town_city: 'Brooklyn',
        county_state: 'US-CA',
        postal_zip_code: '11236',
        country: 'US'
      },
      payment: {
        gateway: 'stripe',
        stripe: {
         payment_method_id: paymentMethod.id
        }
      }
     }
onCaptureCheckout(checkoutToken.id, orderData);
timeout()
nextStep();
   }
  }
  return (
    <div>
      <Review checkoutToken={checkoutToken}/>

      <Divider />
      <Typography variant="h6" gutterBottom style={{margin: "20px 0"}}>Payment Methods</Typography>
      <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({elements, stripe}) => (
        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
          <CardElement />
          <br /> <br />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button variant = "outlined" onClick={backStep}>Back</Button>
            <Button type="submit" variant = "contained" disabled={!stripe} color="primary">
              pay {checkoutToken.live.subtotal.formatted_with_symbol}
            </Button>
          </div>
        </form>
        )}
      </ElementsConsumer>
      </Elements>
    </div>
  )
}

export default PaymentForm