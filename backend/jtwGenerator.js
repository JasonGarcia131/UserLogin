const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(id){
    const payload = {
        user: id
    }
    return jwt.sign(payload, `${process.env.SECRET}`, {expiresIn: 60*60});
}

module.exports = jwtGenerator;