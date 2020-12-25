module.exports = function(application){

    application.post('/login', function(req,res){
        application.app.controllers.login.login(application, req, res);
    });

}