module.exports = function(application){

    application.post('/signUp', function(req, res){
        application.app.controllers.signUp.signUp(application, req, res);
    });

}