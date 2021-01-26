module.exports.upload = function(application,req,res){

    var path = req.headers.path;
    var IdUser = req.body.IdUser;
    var connection = application.config.dbConnection();
    var uploadModel = new application.app.models.UploadDAO(connection);
    console.log(req.body);

    uploadModel.setProfilePhoto(path,IdUser, function(error, response){

        if(error){
            res.status(500);
            res.send("Error in save photo path");
        }

        res.send("Saved!");
    })


}