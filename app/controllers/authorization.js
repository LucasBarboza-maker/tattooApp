module.exports.index = function(application, req, res){
    var connection = application.config.dbConnection();
    var homeModel = new application.app.models.HomeDAO(connection);
    
    
}