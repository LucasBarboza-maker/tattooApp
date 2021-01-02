function GalleryDAO(connection){
    this._connection = connection;
} 

GalleryDAO.prototype.getPhotoId = function(idUser, callback){

    this._connection.query("select idTattoo from tattoo where idUser = ?", idUser, callback);

}

GalleryDAO.prototype.getPhotoId = function(idTattoo, callback){
    this._connection.query("select * from  where idTattoo = ?", idTattoo, callback);
}

GalleryDAO.prototype.deletePhoto  = function(idPhoto, callback){
    this._connection.query("delete from tattoo where idTattoo = ?", idPhoto, callback);
}

module.exports = function(){
    return GalleryDAO;
}