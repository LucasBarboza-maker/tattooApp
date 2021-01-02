function HomeDAO(connection){
    this._connection = connection;
}

HomeDAO.prototype.getTattooArtist = async function(callback){
    await this._connection.query('select * from user', callback);
}

HomeDAO.prototype.checkLoginInfo = async function(user, callback){
   await this._connection.query('select * from user where email=? And password=?', [user.email, user.password], callback);
}

module.exports = function(){
	return HomeDAO;
}