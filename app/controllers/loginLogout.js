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


        
        const id = result.id;
        const token = jwt.sign({id}, process.env.SECRET, {
            expiresIn: 300
        });

        if(result.length <= 0){
            res.status(500);
            res.send("Login error, password or email is wrong");
            return;
        }

        console.log(result);

        res.json({idUser: result[0].IdUser, isATattooArtist: result[0].isATattooArtist, name: result[0].name, email: result[0].email, description: result[0].description, photoURL: result[0].photo, auth: true, token: token});
        


    });
    
}

module.exports.logout = function(application, req, res){
    res.json({auth:false, token:null})
}
