var crypto = require('crypto');

function LoginDAO(connection){
    this._connection = connection;
}

LoginDAO.prototype.checkLoginInfo = function(user, callback){

    var cryptPassword = crypto.createHash("md5").update(user.password).digest("hex");

    user.password = cryptPassword;

    this._connection.query('select * from user where email=? And password=?', [user.email, user.password], callback);
}

module.exports = function(){
	return LoginDAO;
}