var crypto = require('crypto');

function SignUpDAO(connection){
    this._connection = connection;
}

SignUpDAO.prototype.signUser = async function(user, callback){
    
    var cryptPassword = crypto.createHash("md5").update(user.password).digest("hex");
    user.password = cryptPassword;
    await this._connection.query('insert into user set ?', user, callback);

}

module.exports = function(){
    return SignUpDAO;
}