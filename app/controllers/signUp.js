module.exports.signUp = function(application,req, res){
   
    var signInfo = req.body;
    
    req.assert('name',"name can't be empty").notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.status(400);
        res.send('Error in your info');
        return;
    }

    var connection = application.config.dbConnection();
    var signUpModel = new application.app.models.SignUpDAO(connection);
    
    

	signUpModel.signUser(signInfo, function(error, result){
        
        if(error){
            res.status(500);
            res.send('Error in server'+ error);
        }
        
        res.status(200).json(result);
	});	
}