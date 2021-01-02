module.exports.configProfile = function(application, req, res){

    var user = req.body;

    var connection = application.config.dbConnection();
    var configProfileModel = new application.app.models.ConfigProfileDAO(connection);

    configProfileModel.updateUser(user, function(error, result){

        if(error){
            res.status(500).send("Error in the server:"+ error);
        }


        res.status(200).send(result);

    });

}