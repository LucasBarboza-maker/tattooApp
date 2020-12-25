function SignUpDAO(connection){
    this._connection = connection;
}

SignUpDAO.prototype.signUser = function(user, callback){

    this._connection.query('insert into user set ?', user, callback);

}

module.exports = function(){
    return SignUpDAO;
}