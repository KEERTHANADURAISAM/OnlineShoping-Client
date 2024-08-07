import React from 'react'
import'../Styles/Payment.css'
const Payment = () => {
  return (
    <div className='payment-div-flex'>
      <h1 className='payment-h1'>PAYMENT METHOD</h1>
      <p className='payment-p-tag'>Select Payment Method</p>

      <input type="radio" id="payment" name="select" value="Payment"/>
      <label for="payment">Paypal or Credit Card</label><br></br>
      <button type='submit' className='payment-btn'>CONTINUE</button>
    </div>
  )
}

export default Payment
