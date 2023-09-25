const { ifError } = require('assert');
const { error } = require('console');
const fs = require('fs');
const { stringify } = require('querystring');
const readline = require('readline'); // Imp readline para interoretar la salida/entrada de la consola



const persona = {
    name: "Nombre",
    surname: "Apellido",
    age: 30
};

//Convertir el objeto a formato Json

const personaJSON = JSON.stringify(persona);

//Escribir el objeto Json en un archivo

fs.writeFile ('persona.json', personaJSON, (err) => {
    if (err) {
         console.log("Error al escribir en el archivo:  ", err);
         return;
    }
    console.log("El objeto se ha guardado en persona.json");

})

// Leer el objeto Json desde el archivo

fs.readFile('persona.json', 'utf8', (err, data) => {

    if(err){
        console.log("Error al leer el archivo: ", err);
        return;
    }

    const personaLeida = JSON.parse(data);
    console.log("Objeto leido desde Javascript: ");
    console.log(personaLeida);

});


//Reto 3

const rl = readline.createInterface({
    input: process.stdin, //Establece la entrada estándar como la fuente de entrada para readline
    output: process.stdout //Establece la salida estándar como la fuente de salida para readline
});

//Solicitar el nombre por consola
rl.question('Ingrese el nombre: ', (name) =>{
    rl.question('Ingrese el apellido: ', (surname) =>{
        rl.question('Ingrese la edad: ', (age) =>{
            //Cerrar la interfaz de lectura
            rl.close();

            //Crear un objeto con los valores ingresados

            const persona = {
                name : name,
                surname: surname,
                age: parseInt(age) //parseInt es para convertir la edad en un numero entero
            };

            //Convertimos el objeto a formato Json
            const personaJSON =  JSON.stringify(persona);

            //Escribir el objeto JSON en un archivo
            fs.writeFile('persona.JS', personaJSON, (err) =>{
                if (err) {
                    console.error('Error al leer el archivo: ', err);
                    return;                    
                }
                const personaLeida = JSON.parse(data); //Convertimos la cadena Json leida en un objeto javascript
                console.log('Objeto leido desde el archivo: ');
                console.log(personaLeida);
            })


        })
    })
} )