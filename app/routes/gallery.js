var verifyJWT = require("../../config/verifyToken");

module.exports = function(application){

    application.get('/gallery/:idUser', verifyJWT, function(req, res){
        application.app.controllers.gallery.gallery(application, req, res);
    });
}

module.exports = function(application){
    
    application.delete('gallery/:idUser/:idTattoo', verifyJWT, function(req, res){
        application.app.controllers.gallery.deletePhoto(application, req, res);
    })
}