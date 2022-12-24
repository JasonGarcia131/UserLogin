import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const USERNAMEREGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
const PASSWORDREGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    //Initiate state variable for users 
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [validUser, setValidUser] = useState({
        username: false,
        password: false
    });

    //State variables for Error message pop ups.
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setErrorMessage("");
    }, [user]);

    useEffect(() => {
        const result = USERNAMEREGEX.test(user.username);
        console.log(result);
        setValidUser({
            ...validUser, 
            username: result
        });
    }, [user.username]);

    useEffect(() => {
        const result = PASSWORDREGEX.test(user.password);
        console.log(result);
        setValidUser({
            ...validUser,
            password: result
        });
    }, [user.password]);

    //Watches changes in the form.
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const usernameRegexPass = USERNAMEREGEX.test(user.username);
        const passwordRegexPass = PASSWORDREGEX.test(user.password);
        if(!usernameRegexPass || !passwordRegexPass){
            setErrorMessage("invaluid entry");
        }
        else{
            console.log("user", user);
        }
        // try {
        //     const response = await axios.post("http://localhost:3005/users/new-user", user);
        //     console.log("Response", response)
        // } catch (e) {

        // }

    }
    return (
        <div className="formWrapper">
            <Link to="/">back</Link>
            <h1>Register</h1>
            <form onSubmit={(e) => handleSubmit(e)}>

                <label htmlFor="username">Enter Username</label>
                <input
                    type="text"
                    autoComplete="off"
                    value={user.username}
                    name="username"
                    required
                    onChange={handleChange}
                />
                <p className={user.username && !validUser.username ? "instructions" : "hideInstructions"}>"4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed."</p>
                <label htmlFor="username">Enter email</label>
                <input
                    type="email"
                    autoComplete="off"
                    value={user.email}
                    name="email"
                    required
                    onChange={handleChange}
                />
                <label htmlFor="password">Enter Password</label>
                <input
                    type="password"
                    value={user.password}
                    name="password"
                    required
                    onChange={handleChange}
                />
                <p className={user.password && !validUser.password ? "instructions" : "hideInstructions"}>"4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed."</p>
                <button id="register-btn" className="submit-btn" >Register</button>
                <p className="errorMessage">{errorMessage.length > 0 ? errorMessage : ""}</p>
            </form>
        </div>
    )
}

export default Register;