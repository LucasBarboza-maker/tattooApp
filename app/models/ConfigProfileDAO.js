var crypto = require('crypto');

function ConfigProfileDAO(connection){
    this._connection = connection;
}

ConfigProfileDAO.prototype.updateUser = function(user, callback){

    var cryptPassword = crypto.createHash("md5").update(user.password).digest("hex");

    user.password = cryptPassword;

    this._connection.query("update user set ? where idUser=?", [user, user.idUser], callback);
    

}

module.exports = function(){
    return ConfigProfileDAO;
}