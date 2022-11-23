import React from "react";
import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
      })

    const [errorMessage, setErrorMessage] = useState("");
    const [missingField, setMissingField] = useState("");

    const handleChange = (e) => {
      const {name, value} = e.target
      setUser((prevData)=>({...prevData, [name]: value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(user){
            axios.post("http://localhost:3005/register/new-user", user)
            .then(setErrorMessage("Registered"))
            .catch(e=>{
                console.log("error", e.response.data)
                setErrorMessage(e.response.data)
                setTimeout(()=>{setErrorMessage("")}, 3000);
            })
            
        }
        
    }
    console.log("User", user)
    return(
        <div className="formWrapper">
        <Link to="/">back</Link>
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
            <p>{missingField.length > 0 ? missingField : ""}</p>
             <label htmlFor="username">Enter email</label>
            <input 
                type="email"
                value={user.email}
                name="email"
                required
                onChange={handleChange}
            />
             <p>{missingField.length > 0 ? missingField : ""}</p>
            <label htmlFor="password">Enter Password</label>
            <input 
                type="password"
                value={user.password}
                name="password"
                required
                onChange={handleChange}
            />
            <button id="register-btn" className="submit-btn" >Register</button>
            <p>{errorMessage.length > 0 ? errorMessage : "" }</p>
        </form>
        </div>
    )
}

export default Register;