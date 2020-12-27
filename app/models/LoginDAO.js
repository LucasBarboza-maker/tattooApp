function LoginDAO(connection){
    this._connection = connection;
}

LoginDAO.prototype.checkLoginInfo = function(user, callback){
    this._connection.query('select * from user where email=? And password=?', [user.email, user.password], callback);
}

module.exports = function(){
	return LoginDAO;
}