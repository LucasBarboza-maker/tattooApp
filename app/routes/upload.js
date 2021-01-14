const app = require("../../config/server")

var multer = require('multer');
var uuid = require('uuid').v4;

const upload = multer({dest:'uploads/'});

module.exports = function(application){

    application.post('upload', upload.single('imageUpload'), (req, res) =>{
        return res.json({status: 'ok'})
    });

}