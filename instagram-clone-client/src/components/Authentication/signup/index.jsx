import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    const [data, setData] = useState({
        name : "",
        username : "",
        email : "",
        password :"",
     } )
    const handleChange = (e)=>{
      setData({...data, [e.target.name]: e.target.value});
    }

    const handleLogin = async () => {
        const response = await axios.post('http://127.0.0.1:8000/api/register',data);
        console.log(response.data)
    }
  return (
    <div className='login-container flex col '>
            <div className="title"><i className='logo'></i></div>
            <div className="inputs flex col">
                <div className="text flex col">
                    <input type="text" name='name' value={data.name} placeholder='name' onChange={handleChange}/>
                    <input type="text" name='username' value={data.username} placeholder='username' onChange={handleChange}/>
                    <input type="text" name='email' value={data.email} placeholder='email' onChange={handleChange}/>
                    <input type="password" value={data.password} name="password"  placeholder='password'/>
                </div>
                <div className="button flex center">
                
                <Link to={'/dashbaord'} className='link flex center'><button className='login-button' onClick={handleLogin}>Log in</button></Link>
                    
                </div>
            </div>
        </div>
  )
}

export default Signup