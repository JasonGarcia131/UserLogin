import React from "react";
import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Register = () => {
    //Initiate state variable for users 
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
      })

    //State variables for Error message pop ups.
    const [errorMessage, setErrorMessage] = useState("");
    const [missingField, setMissingField] = useState("");

    //Watches changes in the form.
    const handleChange = (e) => {
      const {name, value} = e.target
      setUser((prevData)=>({...prevData, [name]: value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(user){
            axios.post("http://localhost:3005/users/new-user", user)
            .then(()=>setErrorMessage("Registered"))
            .catch(e=>{
                setErrorMessage(e.response.data)
                setTimeout(()=>{setErrorMessage("")}, 3000);
            })
            
        }
        
    }
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
            <p className="errorMessage">{errorMessage.length > 0 ? errorMessage : "" }</p>
        </form>
        </div>
    )
}

export default Register;