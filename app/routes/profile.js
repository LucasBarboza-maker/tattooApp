var verifyJWT = require("../../config/verifyToken");

module.exports = function(application){

    application.post('/profile/update', function(req, res){
        application.app.controllers.profile.configProfile(application, req, res);
    });

    application.get("/profile/:id", verifyJWT, function(req, res){

        application.app.controllers.profile.visitProfile(application, req, res);

    });

    application.delete("/profile/:id", verifyJWT, function(req, res){

        application.app.controllers.profile.deleteProfile(application, req, res);

    });

    application.delete("profile/address/:idAddress/:idUser", verifyJWT, function(req, res){

        application.app.controllers.profile.deleteAddress(application, req, res);
    
    });

    application.post("profile/address", verifyJWT, function(req, res){

        application.app.controllers.profile.deleteAddress(application, req, res);
    
    });

}