const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const mydb = "Empresa";
const coleccion = "Clientes";

const url = "mongodb://127.0.0.1:27017/";

const myobj = { "nombre": "Maria", "direccion": "C/Alcalá 23" };
/*
//Creacion de una BD 
MongoClient.connect(url+mydb, function(err, db) {
    if (err) throw err;
    console.log("Base de datos creada");
    db.close();
    });

    //Creacion de una coleccion dentro de una BD
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.createCollection(coleccion, function(err, res) {
        if (err) throw err;
        console.log("Colección creada");
        db.close();
    });
    });
    */
/*
    //Insertar dentro de una coleccion de una BD
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        
        dbo.collection(coleccion).insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("Documento insertado");
            db.close();
        });
        });*/
/*
         //Obtener datos del primer elemento dentro de una coleccion
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccion).findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result.nombre);
            db.close();
        });
        }); 
    /*
        //Ver todos 
        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccion).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
        });
    
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
    


         //Query simple  
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

    //Sort por un criterio (campo)
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var mysort = { "nombre": 1 };
        dbo.collection(coleccion).find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        });
    }); 
 //Busquedas paginadas
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccion).find().limit(3).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        });
    });*/
 //Borrar  
 /*
 MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var myquery = { "direccion": 'C/Alcalá 1' };
    dbo.collection(coleccion).deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("Documento borrado");
    db.close();
    });
});
*/

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var myquery = { "direccion": "C/Alcalá 1" };
    var newvalues = { $set: {"nombre": "Pedro SL", "direccion": "C/Serrano" } };
    dbo.collection(coleccion).updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("Documento actualizado");
    db.close();
    });
});