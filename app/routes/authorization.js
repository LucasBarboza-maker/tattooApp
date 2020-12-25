module.exports = function(application){

    application.get('/login', function(req,res){
        application.app.controllers.authorization.index(application, req, res);
    });

}