
function VisitProfileDAO(connection){
    this._connection = connection;
}

VisitProfileDAO.prototype.getUserInfo = async function(idUser, callback){

   await this._connection.query('select name ,description ,email ,isATattooArtist ,photo from user where idUser = ?', idUser, callback);

}

VisitProfileDAO.prototype.getFivePhotosToGallery = async function(idUser, callback){

   await this._connection.query('select * from tattoo where idUser=? limit 5', idUser, callback);

}

module.exports = function(){
    return  VisitProfileDAO;
}