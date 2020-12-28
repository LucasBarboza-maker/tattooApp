var crypto = require('crypto');

function SignUpDAO(connection){
    this._connection = connection;
}

SignUpDAO.prototype.signUser = function(user, callback){
    
    var cryptPassword = crypto.createHash("md5").update(user.password).digest("hex");

    user.password = cryptPassword;

    this._connection.query('insert into user set ?', user, callback);

}

module.exports = function(){
    return SignUpDAO;
}