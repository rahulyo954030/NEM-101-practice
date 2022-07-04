import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [formData, SetFormData] =useState()
    const handleChange =(e)=>{
        const {value, name} = e.target
    }
    const handleLogin=()=>{
        console.log(formData);
    }
  return (
    <div>
        <input type="text" name='username' placeholder='username' onChange={handleChange} />
        <input type="text" name='password' placeholder='password' onChange={handleChange} />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login