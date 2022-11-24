import React from "react";
import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser((prevData)=>({...prevData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user){
            axios.post("http://localhost:3005/users/login", user)
            .then(()=>setErrorMessage("Logged in"))
            .catch(e=>{
                setErrorMessage(e.response.data);
                setTimeout(()=>{setErrorMessage("")}, 3000);
            })
        }
    }

      console.log("Login", user)
    return <div className="formWrapper">
        <Link to="/">back</Link>
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
                <button id="login-btn" className="submit-btn" >Log In</button>
                <p>{errorMessage.length > 0 ? errorMessage : "" }</p>
            </form>
            </div>
}

export default Login