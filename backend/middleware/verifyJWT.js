const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    console.log("headers", req.headers)

    const authHeader = req.headers.authorization || req.headers.Authorization;
    console.log("authHeader", authHeader)
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    console.log(token)
    jwt.verify(
        token,
        `${process.env.ACCESS_TOKEN_SECRET}`,
        (err, decoded) => {
            console.log("decoded", decoded)
            if (err) return res.sendStatus(403); //invalid token
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
}

module.exports = verifyJWT