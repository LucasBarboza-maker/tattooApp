function GalleryDAO(connection){
    this._connection = connection;
} 

GalleryDAO.prototype.getPhotoId = function(idUser, callback){

    this._connection.query("select idTattoo from tattoo where idUser = ?", idUser, callback);

}

module.exports = function(){
    return GalleryDAO;
}