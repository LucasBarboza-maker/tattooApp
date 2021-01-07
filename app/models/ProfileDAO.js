var crypto = require('crypto');

function ConfigProfileDAO(connection){
    this._connection = connection;
}

ConfigProfileDAO.prototype.updateUser = async function(user, callback){
    var cryptPassword = crypto.createHash("md5").update(user.password).digest("hex");
    
    user.password = cryptPassword;

    await this._connection.query("update user set ? where idUser=?", [user, user.idUser], callback);
}

ConfigProfileDAO.prototype.returnUser = async function(user, callback){
    await this._connection.query("select * from user where idUser = ?", user.idUser, callback);
}

ConfigProfileDAO.prototype.returnAddress = async function(user, callback){
    await this._connection.query("select * from address where idUser = ?",user.idUser ,callback);
}

ConfigProfileDAO.prototype.insertAddress = async function(address, callback){
    await this._connection.query("insert into address set ? ", address, callback);
}

ConfigProfileDAO.prototype.deleteUser = async function(user, callback){

   await this._connection.query("update user set ? where idUser=?", [user, user.idUser], callback);
}

module.exports = function(){
    return ConfigProfileDAO;
}