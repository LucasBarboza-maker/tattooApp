const jwt = require('jsonwebtoken');
module.exports.login = function(application, req, res){
    var user = req.body;

    var connection = application.config.dbConnection();
    var loginModel = new application.app.models.LoginDAO(connection);

    loginModel.checkLoginInfo(user, function(error, result){

        

        if(error){
            res.status(500);
            res.send("Login error, password or email is wrong");
            return;
        }

        if(!result[0].name){
            res.status(500);
            res.send("Login error, password or email is wrong");
            return;
        }

        const id = result.id;
        const token = jwt.sign({id}, process.env.SECRET, {
            expiresIn: 300
        });

        res.json({ auth: true, token: token });
        


    });
    
}

module.exports.logout = function(application, req, res){
    res.json({auth:false, token:null})
}
