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

        console.log(result[0].photo);
        res.status(200).sendFile('/home/lucas/projects/tattooApp/'+result[0].photo);

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

var path = require("path");
var fs = require("fs");

var dir = path.join(__dirname, 'uploads');

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};


module.exports.returnPhoto = function(application, req, res){
    
    var file = path.join(dir, req.path.replace());

    if(file.indexOf(dir + path.sep) !== 0){
        return res.status(403).end("Forbidden");
    }

    var type = mime[path.extname(file).slice(1)] || 'text/plain';

}