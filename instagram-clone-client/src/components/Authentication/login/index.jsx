import React from 'react'
import './login.css';
import '../../../utilities.css';

const Login = () => {
  return (
    <div className='container flex col'>
        <div className='login-container flex col '>
            <div className="title"><i className='logo'></i></div>
            <div className="inputs flex col">
                <div className="text flex col">
                    <input type="text" placeholder='email'/>
                    <input type="password" name="" id="" placeholder='password'/>
                </div>
                <div className="button flex center">
                    <button>Log in</button>
                </div>
            </div>
        </div>
        <div className='signup-link-container flex center'>
            <span>Don't have an account? </span>
            <a href="#" className='signup-link'>Sign up</a>
        </div>
    </div>
    
  )
}

export default Login