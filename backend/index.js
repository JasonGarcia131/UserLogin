const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;
const {sequelize} = require("./models");

require("dotenv").config();

const connectDb = async () => {
    try{
        await sequelize.authenticate();
        console.log("connecting established")
    }catch(e){
        console.log("error", e)
    }
}
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


const RegisterController = require("./controllers/RegisterController");
app.use("/register", RegisterController);

(async () =>{
    await connectDb();
    app.listen(PORT, ()=>console.log("Server listening on Port 3005"))
})();


