/*const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('free mem: ', os.freemen(), 'bytes');
console.log('Total mem: ', os.totalmen(), 'bytes');*/

/*const fs = require('fs');*/
//CÓDIGO ASINCRONO
/*fs.writeFile('./texto.txt', 'linea uno', function (error){ //CREA UN ARCHIVO EL SO, 
    if(error){
        console.log(error);
    }
    console.log('Archivo creado');
});//EJECUTA EL CÓDIGO QUE ESTA DENTRO Y DESPUES SIGUE EJECUTANDO EL SIGUIENTE CÓDIGO

conseole.log('ultima linea de código'); */


/*
//CÓDIGO NO BLOQUEANTE
//LEE EL ARCHIVO, MUESTRA LOS DATOS EN CRUDO Y SE CONVIERTEN STRING
fs.readFile('./texto.txt', function (error, data){ 
    if(error){
        console.log(error);
    }
    console.log(data.toString());
});
*/


//const http = require('http');
/*
http.createServer(function(req, res){
    res.write('<h1>Hola Mundo dede Nodejs<h1>');
    res.end();
}).listen(3000);*/

/*const colors = require('colors');

http.handleServer = function(req, res){
    res.writeHead(200, {'Content type': 'text/html'});
    res.write('<h1>Hola Mundo/<h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.green);
});*/

const express = require('express');
const colors = require('colors');
const server = express();

server.length('/', function(req, res){
    res.send('<h1>Hola Mundo con Express y Node/<h1>');
    res.end();
})

server.listen(3000, function(){
    console.log('Server on port 3000'.red);
});