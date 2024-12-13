import React, { useState } from 'react'
import { Authlayout } from '../components/layouts/auth-layout'
import Inputfield from '../components/input-field/Input-field'
import Login_Button from '../components/Button/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { addUser } from '../redux/user-slice'
import { useDispatch } from 'react-redux'
import { Helper } from '../services/helpers'



const SignUp = () => {

const [isAuthValid, setisAuthValid] = useState("")
  const navigate = useNavigate()

  const [loader, setloader] = useState(false)
  const dispatch = useDispatch();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [name, setname] = useState("")
  const [error, seterror] = useState({
    email:"" ,
    password:"",
    name:""

  })
  const onSignupsubmit = async (e)=>{
    e.preventDefault();
    let emailError , passwordError , nameError ="" ;

    if (!Helper.validateEmail(email)) {
     emailError  = "invalid email"
      
    }
    if (!Helper.validatePassword(password)) {
    passwordError = "password must be atleat 8 character"
      
    }
    if (!Helper.validatename(name)) {
    nameError = "name must be atleat 3 character"
      
    }

    if (emailError || passwordError || nameError) {
      seterror({email: emailError , password: passwordError , name: nameError});
      
    }else{
      setloader(true)
      try {
        const payload = {name,email,password}
        const response = await axios.post("https://dev-mart-server.vercel.app/api/user/signup" ,payload)
        console.log(response ,"login response");
        
        dispatch(addUser(response?.data?.data))
        seterror({email:"" , password:"", name:"" })
        navigate("/")
        setloader(false)
        
        
        
        
      } catch (error) {
        console.log(error);
        setisAuthValid(error?.response?.data?.message)

        setloader(false)
        
        
      }
     
    }

    
    

  }

  return (
   
      
      <Authlayout>
          <div >
    <h1 className='auth_heading'>Create an  acount</h1>
    <p className='auth_title mt-3 mb-4 '>Enter your details below</p>
    <form >
    <Inputfield styles={{margin: '0px'}}
    err_msg={error.name}
     type="text"
     value={name}
     required

     onChange={setname}
      placeholder="enter your name" 
       ></Inputfield>
    <Inputfield
    required
    type="email"
    err_msg={error.email}
  value={email}
  onChange={setemail}
      placeholder="Email or Phone Number "
    
       styles={{marginTop: '20px'}}
       ></Inputfield>

    <Inputfield
    required
     type="password"
     err_msg={error.password}
      
      placeholder="Password" 
      value={password}
      onChange={setpassword}
      styles={{marginTop: '20px'}}></Inputfield>
      <div className="text-end mt-2">
        <small className='text-danger '>{isAuthValid}</small>
      </div>
<Login_Button onClick={onSignupsubmit}  loading={loader? true:false} disabled={loader? true:false} >
      Create Account
    </Login_Button>
    </form>
    
    <span  >Already have an account? <Link className='login_link' to='/auth/login'>Login</Link></span>
      
     
       </div>
    
   </Authlayout>
  )
}

export default SignUp