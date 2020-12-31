module.exports.gallery = function(application, req, res){

    var idUser = req.params.idUser;
    var connection = application.config.dbConnection();
    var galleryDAO = new application.app.models.GalleryDAO(connection);

    galleryDAO.getPhotoId(idUser, function(error, result){
        
        if(error){
            res.status(500).send("Error in the server "+ error);
            return;
        }

        res.status(200).send(result);
    })

}