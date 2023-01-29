const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'suchy.pdx1-mysql-a7-5b.dreamhost.com',
  user: 'peasa',
  password: 'peasa23??',
  database: 'peasa_dev'
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});



const cors = require('cors');

const express = require('express');

const app = express();

app.use(cors({
    origin: '*',
	methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

/*
app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
});*/

app.get('/testing', cors(), function (req, res, next) { connection.query('SELECT * FROM testing', function (error, results, fields) { if (error) throw error; res.send(results); }); });



app.get('/', function (req, res) {
  console.log("Got a GET request for the homepage");
  res.send('Hello GET');
});


app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
});


app.delete('/del_user', function (req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send('Hello DELETE');
});

app.get('/list_user', function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send('Page Listing');
});

app.get('/ab*cd', function(req, res) {   
  console.log("Got a GET request for /ab*cd");
  res.send('Page Pattern Match');
});
app.get('/hola', function(req, res) {   
  console.log("Got a GET request for /ab*cd");
  res.send('hola martin');
});

var server = app.listen(9988, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
});
