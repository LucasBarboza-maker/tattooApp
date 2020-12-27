const jwt = require('jsonwebtoken');
module.exports = function(application){
    
    application.get('/', verifyJWT, function(req, res){
        application.app.controllers.home.index(application, req, res);
    });


    function verifyJWT(req, res, next){
        var token = req.headers['x-acess-token'];
        if(!token) return res.status(401).json({auth: false, message:"No token provided"});
    
        jwt.verify(token, process.env.SECRET, function(error, decoded){
            if(error) return res.status(500).json({auth:false, message:"Failed to authenticate token"});
            
            req.id = decoded.id;
            next();
        
        });
    }
}