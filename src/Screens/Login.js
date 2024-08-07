import React from 'react'
import'../Styles/Login.css'
const Login = () => {
  return (
    <div className='sign-In-Form'>
    <h1 className='sign-In-header'>SIGN IN</h1>
    <div className='sign-In-Form-Fields'>
    
    <label className='sign-label-email'>Email</label>
    <input type='email' placeholder='enter email' className='sign-input'/>
    
    <label className='sign-label-email'>Password</label>
    <input type='password' placeholder='enter password' className='sign-input'/>
    <button type='submit' className='SIGN-bTN'>SIGN IN</button>
    <label className='sign-label-email'>New Customer?<span className='sign-In-reg'>Register</span></label>
    
    </div>
    </div>
  )
}

export default Login
