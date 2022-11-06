const express = require("express");
const router = express.Router();
const {User} = require("../models");
const bcrypt = require("bcrypt")

router.post("/new-user", async (req,res)=>{
    console.log("route hit")
    //Check if the user exists in the database.
        //1. Destruct the req.body to get username, email, password.
    try{
        const {username,email,password} = req.body;
        console.log("req.body", req.body)
        const existingUsername = await User.findOne({
            where: {
                username: username
            }
        })
        const existingEmail = await User.findOne({
            where: {
                email: email
            }
        })
        if(existingUsername || existingEmail){
            console.log("user exists");
            return res.status(401).json("Username or email already exists.");
        }
        
            console.log("User doesnt exist");
            //Take the user password and hash it with bcrypt
                const saltRounds = 10;
                const salt = await bcrypt.genSalt(saltRounds);
                const hashedPassword = await bcrypt.hash(password, salt);
                console.log("hashed password",hashedPassword);
            //Save new user to database
                const newUser = await User.create({
                username: username,
                email: email,
                password: hashedPassword
            });
            res.send(newUser)
    }catch(e){
        console.log("error")
        res.status(500).send(e)
    }

})


router.get("/users", async (req,res)=>{
    console.log("users route hit");
    console.log("Users DB", User)
    try{    
        const users = await User.findAll();
        res.send(users)
    }catch(e){
        console.log("error");
    }
})

module.exports = router