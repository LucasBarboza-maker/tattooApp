module.exports.visitProfile = function(application, req, res){

    var idUser = req.params.id;

    

    var connection = application.config.dbConnection();
    var visitProfileModel = new application.app.models.VisitProfileDAO(connection);

    visitProfileModel.getUserInfo(idUser, function(error, userResult){

        console.log('O id é '+ idUser);
        if(error){
            res.status(500).send("Error to get user info "+error);
        }

        

        visitProfileModel.getFivePhotosToGallery(idUser,function(error, result){

            if(error){
                res.status(500).send("Error to get tattoo info "+ error);
            }
    
            
            res.status(200).send({userResult, result});
    
        });

    });

   

}