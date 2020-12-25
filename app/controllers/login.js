module.exports.login = function(application, req, res){
    var user = req.body;

    var connection = application.config.dbConnection();
    var homeModel = new application.app.models.HomeDAO(connection);

    homeModel.checkLoginInfo(user, function(error, result){

        if(error){
            res.status(400);
            res.send("Login error, password or email is wrong");
        }

        res.send(result);

    });
    
    
}