const app = require("../../config/server")


module.exports = function(application){

    application.post('/upload',(req, res) =>{
        console.log(JSON.stringify(req.body.photo)) // form fields
        console.log(req.photo) // form files
        console.log(req.file) // form files
        res.send(req.body.photo);
    });

}