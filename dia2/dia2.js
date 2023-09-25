const fs = require('fs/promises');
const readline = require('readline');
const { json } = require('stream/consumers');

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta,(respuesta) =>{
            resolve(respuesta);
            rl.close();

        });
    });
    return pregunta;
    
}

async function persona() {

    try {

        const name = await pregunta ("Ingrese el nombre: ");
        const surname = await pregunta (" Ingrese el apellido: ");
        const age =await pregunta ("Ingrese la edad: ");

        const objeto ={
            name: name,
            surname: surname,
            age: parseInt(age),
        };

        const objetoJson = JSON.stringify(objeto);

        await fs.writeFile("Datos.json", objetoJson);
        console.log("Los datos se han registrado correctamente");


        const datos = await fs.writeFile("informacion.json", "utf8");
        const datosLeidos = JSON.parse(datos);

        console.log(datosLeidos);

        
    } catch (error) {

        console.log("Ha ocurrido el siguiente error: ", error);    
    }
}

persona()