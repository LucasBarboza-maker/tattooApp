var verifyJWT = require("../../config/verifyToken");

module.exports = function(application){

    application.get('/gallery/:idUser', verifyJWT, function(req, res){
        application.app.controllers.gallery.gallery(application, req, res);
    });
}