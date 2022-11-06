/*Realiza una aplicación que permita mostrar insertar, borrar, 
actualizar o mostrar información en la colección de la BD del 
ejercicio anterior.*/

//Código Node usando Express

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mydb = 'DB_definitiva';
const coleccion = 'tabla';

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => { //Manda el html al navegador
  res.sendFile(__dirname + '/index.html');
});

app.post('/', urlencodedParser, (req, res) => {
    //recogemos info del formulario
    var query = req.body.mostrar; // var myquery = { "direccion": 'C/Alcalá 1' };
    var insertarClave = req.body.insertarClave;
    var insertarValor = req.body.insertarClave;
     // var newvalues = { $set: {"nombre": "Pedro SL", "direccion": "C/Serrano" } };
    var borrarClave = req.body.borrarClave
    var borrarValor = req.body.borrarValor
    var actualizarClave = rep.body.actualizarClave
    var actualizarValor = rep.body.actualizarValor
    var myquery = JSON.parse(`{"${borrarClave}": "${borrarValor}"}`);
    var newvalues = JSON.parse(`{ $set: {"${actualizarClave}": "${actualizarValor}"}`);
    
    
    //insertaDoc(insertarClave, insertarValor, mydb, coleccion);
    //borrarDoc(mydb, coleccion, borrarClave, borrarValor);
    update(mydb, coleccion, myquery, newvalues);
    //select(mydb, coleccion, query)
    res.send(req.body);
  });
  
  //CONECTAR CON MONGODB

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";


//// INSERTAR -----------------------------------------------------------------------
function insertaDoc(clave, valor, mydb, coleccion) {
  var docAux = `{"${clave}": "${valor}"}`
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

//// BORRAR --------------------------------------------------------------------------
function borrarDoc(mydb, coleccion, borrarClave, borrarValor) {
 
      //Borrar  
      MongoClient.connect(url, function(err, db) {
        var borrar = JSON.parse(`{"${borrarClave}": "${borrarValor}"}`);
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccion).deleteOne(borrar, function(err, obj) {
        if (err) throw err;
        console.log("Documento borrado");
        db.close();
        });
    });
}
  

  ///// ACTUALIZAR ------------------------------------------------------------------
  function update(mydb, coleccion, myquery, newvalues){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccion).updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("Documento actualizado");
        db.close();
        });
    });
}

//// MOSTRAR -----------------------------------------------------------------------------

function select(mydb, coleccion, query){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mydb);
  var query = { "direccion": "C/Alcalá 1" };
  dbo.collection(coleccion).find(query).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
  });
});

}

app.listen(3000);