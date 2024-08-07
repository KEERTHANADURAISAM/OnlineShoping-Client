import React from 'react'
import'../Styles/CheckOut.css'
const CheckOut = () => {
  return (
    <div className='sign-In-Form'>
        <div className='chekout-headers-div'>
    <label >SignIn</label>
    <label>Shipping</label>
    <label>Payment</label>
    <label>Place Order</label>
    </div>
    <div className='sign-In-Form-Fields'>
    
    <label className='sign-label-email'>Address</label>
    <input type='text' placeholder='Enter Address' className='sign-input'/>
    
    <label className='sign-label-email'>City</label>
    <input type='text' placeholder='Enter City' className='sign-input'/>
    
    <label className='sign-label-email'>PostalCode</label>
    <input type='text' placeholder='Enter PostalCode' className='sign-input'/>
    
    <label className='sign-label-email'>Country</label>
    <input type='text' placeholder='Enter Country' className='sign-input'/>
    <button type='submit' className='SIGN-bTN'>CONTINUE</button>
   
    
    </div>
    </div>
  )
}

export default CheckOut
