module.exports.configProfile = function(application, req, res){

    var user = req.body;

    var connection = application.config.dbConnection();
    var profileModel = new application.app.models.ProfileDAO(connection);

    profileModel.updateUser(user, function(error, result){

        if(error){
            res.status(500).send("Error in the server: "+ error);
        }

        res.status(200).send(result);

    });

}

module.exports.returnProfile = function(application, req, res){

    var user = req.params;
    console.log('O id é '+ user.idUser);

    var connection = application.config.dbConnection();
    var profileModel = new application.app.models.ProfileDAO(connection);

    profileModel.returnUser(user, function(error, result){

        if(error){
            res.status(500).send("Error in the server: "+ error);
        }

        res.status(200).send(result);

    });

}

module.exports.deleteProfile = function(application, req, res){

    var user = req.body;

    var connection = application.config.dbConnection();
    var profileModel = new application.app.models.ProfileDAO(connection);

    profileModel.deleteUser(user, function(error, result){
        
        if(error){
            res.status(500).send("Error in the server: " + error)
        }

        res.status(200).send(result);
    })
}