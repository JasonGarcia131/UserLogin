import React from "react";
import { useState } from "react";
import axios from "axios"

const Login = ({handleSubmit}) => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setUser((prevData)=>({...prevData, [name]: value}))
      }

      console.log("Login", user)
    return <>
            <h1>Login</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    value={user.username}
                    name="username"
                    onChange={handleChange}
                />
                <label htmlFor="username">Password</label>
                <input 
                    type="password"
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            </>
}

export default Login