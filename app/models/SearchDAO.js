function SearchDAO(connection){

    this._connection = connection;

}

SearchDAO.prototype.returnUserByName = async function(typedInfo, callback){

    console.log(this._connection.query(`Select idUser, name, photo from user where name Like ? `,'%'+typedInfo.name+'%', callback));

}



module.exports = function(){

    return SearchDAO;

}