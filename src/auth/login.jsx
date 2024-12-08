import React from 'react'
import { Authlayout } from '../components/layouts/auth-layout'
import Inputfield from '../components/input-field/Input-field'
import Login_Button from '../components/Button/button'
import { Link } from 'react-router-dom'

 const Login = () => {
  return (
    <>
    <Authlayout>
          <div  >
    <h1 className='auth_heading'>Log in to Exclusive </h1>
    <p className='auth_title mt-3 mb-4 '>Enter your details below</p>
    <form className="mb-3">
    <Inputfield type="email" onChange="" placeholder="Email or Phone Number " value="" style={{marginBottom: '20px'}}></Inputfield>
    <Inputfield type="password" onChange="" placeholder="Password" value="" styles={{marginTop: '20px'}}></Inputfield>

    </form>
    <span   ><Link className='forget_password_link' to='/auth/login'>Forget Password?</Link></span>
    <Login_Button   loading={false} disabled={false} >
      Login
    </Login_Button>
      
    <span >Don't have an account? <Link className='login_link' to='/auth/signup'>Signup</Link></span>

       </div>
    
   </Authlayout>
        </>
  )
}
export default Login
