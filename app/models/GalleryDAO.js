function GalleryDAO(connection){
    this._connection = connection;
} 

GalleryDAO.prototype.getPhotoId = async function(idUser, callback){

   await this._connection.query("select idTattoo from tattoo where idUser = ?", idUser, callback);

}

GalleryDAO.prototype.getPhotoId = async function(idTattoo, callback){
    await this._connection.query("select * from  where idTattoo = ?", idTattoo, callback);
}

GalleryDAO.prototype.deletePhoto  = async function(idPhoto, callback){
   await this._connection.query("delete from tattoo where idTattoo = ?", idPhoto, callback);
}

module.exports = function(){
    return GalleryDAO;
}