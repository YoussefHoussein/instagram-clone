import React, { useState } from 'react'
import './login.css';
import '../../../utilities.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const [data , setData] = useState({
        email: "",
        password : "",
    })
    const handleDataChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    
    const handleLogin = async () => {
        const response = await axios.post('http://127.0.0.1:8000/api/login',data);
        console.log(response.data.user.id)
        localStorage.setItem('token',response.data.authorisation.token)
        localStorage.setItem('id',response.data.user.id)
        console.log(response.data.authorisation.token)

    }
   
    
  return (
    <div className='container flex col'>
        <div className='login-container flex col '>
            <div className="title"><i className='logo'></i></div>
            <div className="inputs flex col">
                <div className="text flex col">
                    <input type="text" name='email' placeholder='email'  onChange={handleDataChange}/>
                    <input type="password" name="password" id="" placeholder='password' onChange={handleDataChange}/>
                </div>
                <div className="button flex center">
                <Link to={"/dashbaord"} className='link flex center'><button className='login-button' onClick={handleLogin}>Log in</button></Link>
                </div>
            </div>
        </div>
        <div className='signup-link-container flex center'>
            <span>Don't have an account? </span>
            <Link to={"/signup"} className='signup-link'>Sign up</Link>
        </div>
    </div>
    
  )
}

export default Login