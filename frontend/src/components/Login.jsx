import React from "react";
import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import { useContext } from "react";
import axios from "../api/axios";


const LOGIN_URL = '/auth'
const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const {setAuth} = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser((prevData)=>({...prevData, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(user){
            const response = axios.post("http://localhost:3005/users/login", user)
           
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