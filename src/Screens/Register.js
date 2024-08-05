import React from 'react'
import'../Styles/Register.css'
const Register = () => {
  return (
    <div className='sign-In-Form'>
    <h1 className='sign-In-header'>REGISTER</h1>
    <div className='sign-In-Form-Fields'>
    <label className='sign-label-email'>Name</label>
    <input type='text' placeholder='enter Name' className='sign-input'/>
    
    <label className='sign-label-email'>Email</label>
    <input type='email' placeholder='enter email' className='sign-input'/>
    
    <label className='sign-label-email'>Password</label>
    <input type='password' placeholder='enter password' className='sign-input'/>
    <label className='sign-label-email'>Confirm Password</label>
    <input type='password' placeholder='enter password' className='sign-input'/>

    <button type='submit' className='SIGN-bTN'>SIGN IN</button>
    <label className='sign-label-email'>Have an account!<span className='sign-In-reg'>Login</span></label>
    
    </div>
    </div>
  )
}

export default Register
