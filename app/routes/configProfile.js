var verifyJWT = require("../../config/verifyToken");

module.exports = function(application){

    application.post('/update', function(req, res){
        application.app.controllers.configProfile.configProfile(application, req, res);
    });

}