const express = require("express");
const router = express.Router();
const {User} = require("../models");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../jtwGenerator");

router.post("/new-user", async (req,res)=>{
    //Check if the user exists in the database.
        //1. Destruct the req.body to get username, email, password.
    try{
        const {username,email,password} = req.body;
        console.log("req.body", req.body)
        //2. Check to see if email or username exists in the database.
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
            return res.status(401).json("Username or email already exists.");
        }
        //Take the user password and hash it with bcrypt
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        //Save new user to database
        const newUser = await User.create({
            username: username,
            email: email,
            password: hashedPassword
        });
        console.log("user id", newUser.id);
        const token = jwtGenerator(newUser.id);
        return res.json({token});
    }catch(e){
        return res.status(500).send(e);
    }

})

router.get("/all-users", async (req,res)=>{
    try{    
        const users = await User.findAll({
            attributes: ['id','username', 'email']
        });
        return res.json(users);
       
    }catch(e){
        res.status(500).json(e)
    }
})

router.post("/login", async (req,res)=>{
    try{
        const {username, password} = req.body;
        const existingUsername = await User.findOne({
            where: {
                username: username
            }
        })
        if(!existingUsername){
            return res.status(401).json("Username or password is incorrect");
        }
        const validPassword = await bcrypt.compare(password, existingUsername.password);
        if(!validPassword){
            return res.status(401).json("Username or password is incorrect");
        }
    }catch(e){
        res.status(500).json(e)
    }
})

router.delete("/delete/:id", async (req, res)=>{

    try{
        //Saving id paramenter passed from the request
        const user_id = req.params.id

        //Deleting user from database 
        if(user_id != null) { 
            await User.destroy({
            where: {
                id: user_id
            }
        }) 
            res.status(204).send("successfully deleted user");
        }else{
            res.status(500).send("did not delete user");
        } 
        
    }catch(e){
        res.status(500).json(e);
    }
})

module.exports = router