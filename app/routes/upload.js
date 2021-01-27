var mkdirp = require('mkdirp');
var multer = require('multer');


module.exports = function(application){

    var storage = multer.diskStorage({
        destination: 'uploads/profilePhotos/',
        filename: function (req, file, cb) {
            switch (file.mimetype) {
                case 'image/jpeg':
                    ext = '.jpeg';
                    break;
                case 'image/png':
                    ext = '.png';
                    break;
            }
            cb(null, file.originalname);
        }
    });
    
    
    var upload = multer({storage: storage});
    
    application.use(upload.single('imageUpload'));

    application.post('/upload',(req, res) =>{
       application.app.controllers.upload.upload(application,req,res);
    });

}