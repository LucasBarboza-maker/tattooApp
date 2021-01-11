module.exports.search = function(application, req, res){

    var typedInfo = req.body;

    var connection = application.config.dbConnection();
    var searchModel = new application.app.models.SearchDAO(connection);



    searchModel.returnUserByName(typedInfo, function(error, result){
        
        if(error){
            res.status(500).send("Error in the server info: "+ error);
        }

        res.status(200).send(result);
    });

    

}