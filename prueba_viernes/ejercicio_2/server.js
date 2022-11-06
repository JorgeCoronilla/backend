const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mydb = 'DB_definitiva';
const coleccion = 'tabla';

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => { 
  res.sendFile(__dirname + '/index.html');
});

app.post('/', urlencodedParser, (req, res) => {
    //recogemos info del formulario
    var nombre = req.body.nombre; 
    var email = req.body.email;
    var password = req.body.password;
    
    
    insertaDoc(insertarClave, insertarValor, mydb, coleccion);
    res.send(req.body);
  });
  
  //CONECTAR CON MONGODB

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";


//// INSERTAR -----------------------------------------------------------------------
function insertaDoc(nombre, email, pass, mydb, coleccion) {
  var docAux = `{"nombre": ${nombre}, "email":${email}, "pass": ${pass}}`;
  var myobj = JSON.parse(docAux);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(coleccion).insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("Documento insertado");
        db.close();
    });
    });
}


app.listen(3000);