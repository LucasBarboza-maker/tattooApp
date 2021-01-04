var verifyJWT = require("../../config/verifyToken");

module.exports = function(application){
    
    application.get('/', verifyJWT, function(req, res){
        application.app.controllers.home.index(application, req, res);
    });

    application.get('/wellcome', function(req, res){
        let ip = req.ip
        res.send("Wellcome  i am:"+ip);
    });
    


  
}