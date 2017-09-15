var express = require('express')
var app = express()
var mysql = require('./models/main')

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res){
	res.send('hola')
})

app.get('/test', function(req, res){
	mysql.query(`

		SELECT 
			*
		FROM 
			usuario

		`, function(err, result){
			if (err) {
				console.log('ERROR')
			} else {
				res.json(result)
			}
		})
})

app.listen(3000, port)

function port() {
	console.log('3000')
}


