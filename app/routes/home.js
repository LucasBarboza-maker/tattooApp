var verifyJWT = require("../../config/verifyToken");

module.exports = function(application){
    
    application.get('/', verifyJWT, function(req, res){
        application.app.controllers.home.index(application, req, res);
    });


  
}