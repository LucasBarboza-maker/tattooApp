var verifyJWT = require("../../config/verifyToken");

module.exports = function(application){

    application.get("/profile/:id", verifyJWT, function(req, res){

        application.app.controllers.visitProfile.visitProfile(application, req, res);

    });

}