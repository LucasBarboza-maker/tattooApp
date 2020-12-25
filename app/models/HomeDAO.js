function HomeDAO(connection){
    this._connection = connection;
}

HomeDAO.prototype.getTattooArtist = function(callback){
    this._connection.query('select * from user', callback);
}

module.exports = function(){
	return HomeDAO;
}