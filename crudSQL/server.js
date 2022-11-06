// Inclusión de librería y constante para la conexión:

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'baseprueba'
});

//Probar la conexión:

connection.connect((err)=> {
    if(!err){
        let query = 'SELECT * from tabla1';
    connection.query(query, (err, rows) => {
        if(err) throw err;
        console.log('Datos de tabla1: \n', rows);
        //connection.end();
    });
        console.log('Connection Established Successfully');
        connection.end();
    }else{
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    }
});
