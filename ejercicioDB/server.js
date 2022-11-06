//Código Node usando Express

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => { //Manda el html al navegador
  res.sendFile(__dirname + '/index.html');
});

app.post('/', urlencodedParser, (req, res) => {
  //recogemos info del formulario
  const mydb = req.body.NombreBD;
  const coleccion = req.body.coleccion1;
  var clave = req.body.clave;
  var valor = req.body.valor
  creaBD(mydb, coleccion);
  insertaDoc(clave, valor, mydb, coleccion);
  //console.log(dbName, coleccion1, clave, valor);
  //console.log('First Name:', req.body.NombreBD, '\nLast Name: ', req.body.coleccion1, '\nEmail: ', req.body.clave);
  res.send(req.body);

});


app.listen(3000);

//CONECTAR CON MONGODB

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";


//crear base de datos
function creaBD(mydb, coleccionN) {
  MongoClient.connect(url + mydb, function (err, db) {
    if (err) throw err;
    console.log("Base de datos creada");
    db.close();
  });

  //Creacion de una coleccion dentro de una BD
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.createCollection(coleccionN, function (err, res) {
      if (err) throw err;
      console.log("Colección creada");
      db.close();
    });
  });
}

function insertaDoc(clave, valor, mydb, coleccion) {
  var docAux = `{"${clave}": "${valor}"}`
  var myobj = JSON.parse(docAux);
  
  //var doc = `{${clave}: "${valor}","edad":43,"comprendido":true}`
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

