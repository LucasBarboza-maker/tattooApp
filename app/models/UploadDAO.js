function UploadDAO(connection){
    this._connection = connection;
}

UploadDAO.prototype.setProfilePhoto = async function(path, IdUser, callback){
    
    await this._connection.query("Update user set photo=? where IdUser=?",[path, IdUser], callback); 

}

module.exports = function(){

    return UploadDAO;

}