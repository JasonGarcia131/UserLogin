const express = require("express");
const router = express.Router();

router.post("/", async (req,res)=>{
    const {username,email,password} = req.body;
        const existingUser = await db.findOne({
            where: {
                username: username,
                email: email
            }
        })
        if(existingUser){
            console.log("user exists")
        }else{
            try{
                await db.create({
                username: username,
                email: email,
                password: password
            })
        }catch(e){
            console.log("error", e)
        }
        }
   
})

module.exports = router