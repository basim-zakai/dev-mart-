import React from 'react'
import { Authlayout } from '../components/layouts/auth-layout'
import Inputfield from '../components/input-field/Input-field'
import Login_Button from '../components/Button/button'
import { Link } from 'react-router-dom'



const SignUp = () => {
  return (
   
      
      <Authlayout>
          <div >
    <h1 className='auth_heading'>Create an  acount</h1>
    <p className='auth_title mt-3 mb-4 '>Enter your details below</p>
    <form >
    <Inputfield styles={{margin: '20px 00px'}}
     type="text"
      onChange="" 
      placeholder="enter your name" 
      value="" ></Inputfield>
    <Inputfield type="email"
     onChange=""
      placeholder="Email or Phone Number "
       value=""
       style={{marginBottom: '20px'}}></Inputfield>
    <Inputfield
     type="password"
      onChange="" 
      placeholder="Password" 
      value="" 
      styles={{marginTop: '20px'}}></Inputfield>
<Login_Button   loading={false} disabled={false} >
      Create Account
    </Login_Button>
    </form>
    
    <span  >Already have an account? <Link className='login_link' to='/auth/login'>Login</Link></span>
      
     
       </div>
    
   </Authlayout>
  )
}

export default SignUp