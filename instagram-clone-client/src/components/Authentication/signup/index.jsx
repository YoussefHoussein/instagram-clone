import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='login-container flex col '>
            <div className="title"><i className='logo'></i></div>
            <div className="inputs flex col">
                <div className="text flex col">
                    <input type="text" placeholder='name'/>
                    <input type="text" placeholder='username'/>
                    <input type="text" placeholder='email'/>
                    <input type="password" name="" id="" placeholder='password'/>
                </div>
                <div className="button flex center">
                    <Link to={'/dashbaord'} className='link flex center'><button className='login-button'>Log in</button></Link>
                    
                </div>
            </div>
        </div>
  )
}

export default Signup