// index.js

var express = require ('express')
var app = express()

app.get('/',function (req,res) {
	res.send('Hello World, Express! ')
})

app.listen(8000, function *() {
	console.log('Express app listneing on port 8000!')
})