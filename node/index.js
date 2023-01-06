const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE people (id int not null auto_increment, name VARCHAR(255), primary key(id))";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    })
})

const sql = `INSERT INTO people(name) values('Rafael')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    let name = '';
    connection.query('SELECT name FROM people', (err, result) => {
        if (err) throw err;
        let message = `<h1>Full Cycle Rocks!</h1>
        <p>- Lista de nomes cadastrada </p>
        <ul>`;
        result.forEach(element => {
            message += `<li>${element.name}</li>`;
        });
        message += '</ul>';
        res.send(message)
    })    
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})