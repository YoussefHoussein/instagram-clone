import React from 'react'
import './signup.css'
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
                    <button>Log in</button>
                </div>
            </div>
        </div>
  )
}

export default Signup