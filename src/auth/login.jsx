import React from 'react'
import { Authlayout } from '../components/layouts/auth-layout'
import Inputfield from '../components/input-field/Input-field'
import Login_Button from '../components/Button/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Helper } from '../services/helpers'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/user-slice'

 const Login = () => {
  const navigate = useNavigate()
  const [loader, setloader] = useState(false)
  const dispatch = useDispatch();
  const [isAuthValid, setisAuthValid] = useState("")
  
  
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const [error, seterror] = useState({
    email:"" ,
    password:""

  })
  const onLoginsubmit = async (e)=>{
    e.preventDefault();
    let emailError , passwordError ="";

    if (!Helper.validateEmail(email)) {
     emailError  = "invalid email"
      
    }
    if (!Helper.validatePassword(password)) {
    passwordError = "password must be atleat 8 character"
      
    }

    if (emailError || passwordError) {
      seterror({email: emailError , password: passwordError});
      
    }else{
      setloader(true)
      try {
        const payload = {email,password}
        const response = await axios.post("https://dev-mart-server.vercel.app/api/user/login" ,payload)
        console.log(response ,"login response");
        dispatch(addUser(response?.data?.data))
        seterror({email:"" , password:""})
        navigate("/")
        setloader(false)
        d
        
        
        
      } catch (error) {
        console.log(error);
        setisAuthValid(error?.response?.data?.message)

        setloader(false)
        
        
      }
     
    }

    
    

  }
  return (
   
    <>
    <Authlayout>
          <div  >
    <h1 className='auth_heading'>Log in to Exclusive </h1>
    <p className='auth_title mt-3 mb-4 '>Enter your details below</p>
    <form className="mb-3">
    <Inputfield  type="email"  err_msg={error.email}  required onChange={setemail} value={email} placeholder="Email or Phone Number " style={{marginBottom: '20px'}}></Inputfield>
    <Inputfield  type="password" err_msg={error.password} required onChange={setpassword} placeholder="Password" value={password} styles={{marginTop: '20px'}}></Inputfield>
    <span   ><Link className='forget_password_link' to='/auth/login'>Forget Password?</Link></span>
    <div className="text-end mt-2">
        <small className='text-danger '>{isAuthValid}</small>
      </div>
    <Login_Button  onClick={ onLoginsubmit}   loading={loader? true:false} disabled={loader? true:false} >
      Login
    </Login_Button>
    </form>
  
      
    <span >Don't have an account? <Link className='login_link' to='/auth/signup'>Signup</Link></span>

       </div>
    
   </Authlayout>
        </>
  )
}
export default Login
