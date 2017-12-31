var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(bodyParser.json());
app.post('/noteList', function(req, res){
	console.log(req.body);
	res.send({sucess:true});
})

app.post('/saveNote', function(req, res){
	console.log(req.body);
	res.send('you note has been save');
})



module.exports = app;