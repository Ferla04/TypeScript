"use strict";
//tipos de variables
//numerica
let edad12 = 31;
//string
let nombreUsuario2 = "Pepe Perez";
//booleano
let estadoUsuario = false;
//any
let datoDesconocido = 100;
//declarar
let declarada;
//inicializar
declarada = "Esto es un string";
//imprimir
console.log("Hola tec Plus");
console.log("-------------------");
//arreglos
//arreglo tipo numerico
let edadesTecPlus = [17, 20, 25.2];
//arreglo tipo string
let nombresTecPlus = ["Lizeth", "Carlos", "Juliana"];
//arreglo que reciba diferentes datos
let arregloDiferentesDatos = ["Lizeth", 20, true];
//lectura
console.log(arregloDiferentesDatos[0]);
//recorrido
for (const edad of edadesTecPlus) {
    console.log("Edad: ", edad);
}
//objetos
let preciosSuper = { arroz: 2000, aceite: 5000 };
//lectura
console.log("valor de la propiedad arroz: ", preciosSuper["arroz"]);
//recorrido con for-in
for (const propiedad in preciosSuper) {
    console.log("propiedad: ", propiedad);
    console.log("valor: ", preciosSuper[propiedad]);
}
