import React from "react";
import { useState } from "react";
import axios from "axios";

const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
      })
    const handleChange = (e) => {
      const {name, value} = e.target
      setUser((prevData)=>({...prevData, [name]: value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(user){
            axios.post("http://localhost:3005", user)
        }
    }
    console.log("User", user)
    return(
        <>
        <h1>Register</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            
            <label htmlFor="username">Enter Username</label>
            <input 
                type="text"
                value={user.username}
                name="username"
                required
                onChange={handleChange}
            />
             <label htmlFor="username">Enter email</label>
            <input 
                type="email"
                value={user.email}
                name="email"
                required
                onChange={handleChange}
            />
            <label htmlFor="password">Enter Password</label>
            <input 
                type="text"
                value={user.password}
                name="password"
                required
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
        </>
    )
}

export default Register;