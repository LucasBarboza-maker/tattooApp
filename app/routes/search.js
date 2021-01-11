module.exports = function(application){

    application.post('/search', function(req, res){
        application.app.controllers.search.search(application, req, res);
    })
}