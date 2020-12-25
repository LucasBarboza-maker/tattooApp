function HomeDAO(connection){
    this._connection = connection;
}

HomeDAO.prototype.getTattooArtist = function(callback){
    this._connection.query('select * from user', callback);
}

HomeDAO.prototype.checkLoginInfo = function(user, callback){
    this._connection.query('select * from user where email=? And password=?', [user.email, user.password], callback);
}

module.exports = function(){
	return HomeDAO;
}