var app = require('./config/server');
var connection1 = require('./config/dbConnection');

app.listen(3000, function(){
	console.log('Servidor ON');
});