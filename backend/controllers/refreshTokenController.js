const User = require('../model/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    console.log("line 9 in refreshToken", refreshToken)
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        `${process.env.REFRESH_TOKEN_SECRET}`,
        (err, decoded) => {
            console.log("decoded--------------",decoded)
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles);
            const posts = Object.values(foundUser.posts);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": foundUser.username,
                        "profilePicture": foundUser.profilePicture,
                        "posts": posts,
                        "roles": roles
                    }
                },
                `${process.env.ACCESS_TOKEN_SECRET}`,
                { expiresIn: '10m' }
            );
            res.json({accessToken })
        }
    );
}

module.exports = { handleRefreshToken }