/*
https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/project/


Ver la información de un libro concreto con su autor/es
Insertar un libro con su autor/es (si existe/n no se crea/n 
autor/es, pero si no, se deben insertar también). Sólo tenemos 
un formulario de inserción de libro.
*/
const { getDiffieHellman } = require('crypto');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const mydb = "biblioteca";
const coleccionAutores = "autores";
const coleccionLibros = "libros";


const url = "mongodb://localhost:27017/";


// - Un listado de todos los libros

      //Ver todos 
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccionLibros).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
        });

        //Ver todos 
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccionAutores).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
        });


