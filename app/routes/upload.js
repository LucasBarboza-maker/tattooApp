var mkdirp = require('mkdirp');
var multer = require('multer');


module.exports = function(application){

    var storage = multer.diskStorage({
        destination: function(req, file, cb){
            mkdirp(req.headers.path, function(err) { 
                if(err){
                    return;
                }
             });
             cb(null, req.headers.path);
        },
        filename: function (req, file, cb) {
            switch (file.mimetype) {
                case 'image/jpeg':
                    ext = '.jpeg';
                    break;
                case 'image/png':
                    ext = '.png';
                    break;
            }
            cb(null, file.originalname + ext);
        }
    });
    
    
    var upload = multer({storage: storage});
    
    application.use(upload.single('imageUpload'));

    application.post('/upload',(req, res) =>{
        console.log(JSON.stringify(req.body.photo)) // form fields
        console.log(req.photo) // form files
        console.log(req.file) // form files
        res.send(req.body.photo);
    });

}