import React from 'react'
 
import './App.css';
const Login = () => {
  return (
   <div className="item1">
        <div className="item2">
           <div className="item4">
                <p className='item3'>Login Form</p>
                <label htmlFor="name">Username</label>
                <input type="text" placeholder='Enter your username' id='name'/>
                <label htmlFor="password">Password</label>
                <input type="text" placeholder='password' id='password' />
                <button className='btn'>Login</button>
           </div>
        </div>
   </div>
  )
}

export default Login

