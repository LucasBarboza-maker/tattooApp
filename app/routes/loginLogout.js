
const jwt = require('jsonwebtoken');

module.exports = function(application){

    application.post('/login', function(req,res){
        application.app.controllers.loginLogout.login(application, req, res);
    });


    application.get('/logout', function(req, res){
        application.app.controllers.loginLogout.logout(application, req, res);
    });



}