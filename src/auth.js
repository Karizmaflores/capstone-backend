const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateJWT(req, res, next){
    //get authentification header
    const authHeader = req.headers.authorization;
    // console.log(authHeader);

    //check if bearer token exists
    if(authHeader){
        const token = authHeader.split(" ")[1];


jwt.verify(token, process.env.DB_JWT_SECRET, (err, user) => {
            if (err){
                res.sendStatus(403);
            }
            if(user.role === 'USER'){
                req.user = user;
            }
            
            next();
        });
    } else{
        res.sendStatus(403);
    }

}

module.exports = authenticateJWT;