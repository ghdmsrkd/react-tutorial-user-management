const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT ||5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

console.log(conf);
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database,
});
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Connected to the MySQL server.');
  });

 // console.log(connection);


app.get('/api/customers', (req,res) => {
    connection.query(
        "SELECT * FROM customer;",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});



app.listen(port, () => console.log(`Listening on port ${port}`));