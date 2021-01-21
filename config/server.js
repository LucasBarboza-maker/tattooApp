var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var multer = require('multer');
var uuid = require('uuid').v4;
require("dotenv-safe").config();

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(express.urlencoded({extended: true}));
app.use(expressValidator());

var storage = multer.diskStorage({
    destination: './public/users',
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

app.use(upload.single('imageUpload'));

app.use(express.json())

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;