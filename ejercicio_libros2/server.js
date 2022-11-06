const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => { //Manda el html al navegador
    res.sendFile(__dirname + '/index.html');
});

app.post('/', urlencodedParser, (req, res) => {
    //recogemos info del formulario
    const nombre = req.body.nombre;
    res.send(req.body);
    muestraLibro(nombre);
    const myquery = { nombre: req.body.nombre1 };
    var newvalues = { $set: { libro: req.body.titulo1 } };
    //inserta(myquery, newvalues);
    checkAndInserT(myquery, newvalues);
});


app.listen(3000);

const mongo = require('mongodb');
const { checkPrime } = require('crypto');
const MongoClient = mongo.MongoClient;

const mydb = "Biblio";
const coleccionLibros = "libros";
const coleccionAutores = "autores";

const url = "mongodb://localhost:27017/";


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
        dbo.createCollection(coleccionLibros, function(err, res) {
            if (err) throw err;
            console.log("Colección creada");
            db.close();
        });
        });

        //Creacion de una coleccion dentro de una BD
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            dbo.createCollection(coleccionAutores, function(err, res) {
                if (err) throw err;
                console.log("Colección creada");
                db.close();
            });
            });



myobj1 = 
    {  
        "nombre": "Julio",
        "apellidos": "Cortázar",
        "año": 1962,
        "tipo": "cuentos, novela"
    }, {
        "nombre": "Gabriel",
        "apellidos": "G Márquez",
        "año": 1963,
        "tipo": "cuentos, novela"
    }, {
        "nombre": "Jorge L",
        "apellidos": "Borges",
        "año": 1964,
        "tipo": "cuentos, novela"
    }, {
        "nombre": "Eduardo",
        "apellidos": "Galeano",
        "año": 1965,
        "tipo": "cuentos, novela"
    }, {
        "nombre": "Juan",
        "apellidos": "Rulfo",
        "año": 1966,
        "tipo": "cuentos, novela"
    }


myobj2 = 
    {
        "titulo": "Rayuela",
        "ISBN": 9876,
        "tipo": "novela",
        "páginas": 678
    }, {
        "titulo": "Cien años de Soledad",
        "ISBN": 9877,
        "tipo": "novela",
        "páginas": 678
    }, {
        "titulo": "El túnel",
        "ISBN": 9876,
        "tipo": "novela",
        "páginas": 678
    }, {
        "titulo": "EL Alef",
        "ISBN": 9876,
        "tipo": "novela",
        "páginas": 678
    }, {
        "titulo": "El llano en llamas",
        "ISBN": 9876,
        "tipo": "novela",
        "páginas": 678
    }


   

var myobj2 = {
    "titulo": "El llano en llamas",
    "ISBN": 9876,
    "tipo": "novela",
    "páginas": 678
}

var myobj1 ={
    "nombre": "Juan",
    "apellidos": "Rulfo",
    "año": 1966,
    "tipo": "cuentos, novela"
}

//Insertar dentro de una coleccion de una BD
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);

    dbo.collection(coleccionLibros).insertOne(myobj2, function (err, res) {
        if (err) throw err;
        console.log("Documento insertado");
        db.close();
    });
});

//Insertar dentro de una coleccion de una BD
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);

    dbo.collection(coleccionAutores).insertOne(myobj1, function (err, res) {
        if (err) throw err;
        console.log("Documento insertado");
        db.close();
    });
});


  //Ver todos 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(coleccionLibros).find().toArray(function(err, result) {
        if (err) throw err;
        console.log("11111",result);
        db.close();
    });
    });


  //Ver todos 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(coleccionAutores).find().toArray(function(err, result) {
        if (err) throw err;
        console.log("222",result);
        db.close();
    });
    });

    //Query simple  
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var query = { titulo: "El llano en llamas"};
        dbo.collection(coleccionLibros).find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log("333",result);
        db.close();
        });
    });

    var query1 = { apellidos: "G Márquez"};
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var query = { titulo: "El llano en llamas"};
        dbo.collection(coleccionAutores).find(query1).toArray(function(err, result) {
        if (err) throw err;
        console.log("444",result);
        db.close();
        });
    });
    

    const query = {}
    const options = {
        
        // Include only the `title` and `imdb` fields in the returned document
        projection: { _id: 1, titulo: 1},
      };
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var query = { titulo: "El llano en llamas"};
        dbo.collection(coleccionLibros).findOne(query, options).toArray(function(err, result) {
        if (err) throw err;
        console.log("333",result);
        db.close();
        });
    });

    MongoClient.connect(url, function(err, db) {
        var query = { titulo: "El llano en llamas"};
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccionLibros).findOne(query, function(err, result) {
            if (err) throw err;
            console.log(result._id);
            db.close();
        });
        }); 
     
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            var myquery = { nombre: "Juan" };
            var newvalues = { $set: {id_libro: "6362d48e84bdd84f33ee8fcc"}};
            dbo.collection(coleccionAutores).updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("Documento actualizado");
            db.close();
            });
        });


MongoClient.connect(url, function(err, db) {
    var query = { nombre: "Juan"};
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(coleccionAutores).findOne(query, function(err, result) {
        if (err) throw err;
        //console.log(result.nombre, result.apellidos,result.id_libro, result._id);
        console.log(result);
        var query2 = { _id: result.id_libro};
        dbo.collection(coleccionLibros).findOne(query2, function(err, result2) {
            if (err) throw err;
            console.log(result2);
            db.close();
            
        });
    });
    }); 

    MongoClient.connect(url, function(err, db) {
        var query = { nombre: "Juan"};
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccionAutores).findOne(query, '_id', function(err, result) {
            if (err) throw err;
            //console.log(result.nombre, result.apellidos,result.id_libro, result._id);
            console.log(result);
            var query2 = { '_id': result.id_libro};
            dbo.collection(coleccionLibros).findOne(query2, function(err, result2) {
                if (err) throw err;
                console.log(result2);
                db.close();
                
            });
        });
        }); 


        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            var myquery = { nombre: "Jose L" };
            var newvalues = { $set: {libro: "EL Alef"}};
            dbo.collection(coleccionAutores).updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("Documento actualizado");
            db.close();
            });
        });
*/

function muestraLibro(nombreAutor) {
    MongoClient.connect(url, function (err, db) {
        var query = { nombre: nombreAutor };
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccionAutores).findOne(query, function (err, result) {
            if (err) throw err;
            console.log(result);
            var query2 = { 'titulo': result.libro };
            dbo.collection(coleccionLibros).findOne(query2, function (err, result2) {
                if (err) throw err;
                console.log(result2);
                db.close();

            });
        });
    });

}


function checkAndInserT(query, newvalues) {
    console.log(buscar(query));
    
}
async function buscar(query1) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccionAutores).find(query1).toArray(function (err, result) {
            if (err) throw err;
            return(result)
            db.close();
        });
    });
}


function inserta(myquery, newvalues) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccionAutores).updateOne(myquery, newvalues, function (err, res) {

            if (err) throw err;
            console.log("Documento actualizado");
            /*
        dbo.collection(coleccionLibros).findOne(myquery, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
            */
            db.close();
        });
    });
}

/*
function inserta(myquery, newvalues){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccionAutores).updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("Documento actualizado");
        dbo.collection(coleccionLibros).findOne(myquery, function(err, result) {
            if (err) throw err;
            console.log(result._id);
            db.close();
        });
        db.close();
        });
    });
}*/ 