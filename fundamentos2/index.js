"use strict";
console.log("--------------Funcion normal-----------");
//funcion "normal"
function normal(nombre) {
    console.log("Hola: ", nombre);
}
normal("Pepe");
console.log("------parametros tipos-------------");
//parametros obligatorios, opciones y por defecto
//los opcionales van acompañados de un interrogante, igualmente se "tipean"
function tiposParametros(nombre, estado, peso = 100) {
    let nombreUsuario1 = nombre;
    console.log("Nombre usuario :", nombreUsuario1);
    //los parametros opciones siempre hay que validarlos con un condicional
    if (estado) {
        console.log("Su estado es :", estado);
    }
    else {
        console.log("No hay un estado");
    }
    console.log("El peso es: ", peso);
}
tiposParametros("Pepe");
console.log("------variables tipo funcion-------------");
//variables que guardan funciones
let variableFuncion = function (habilitado) {
    return console.log("Su estado es :", habilitado);
};
variableFuncion(true);
//setTimeout PROCESO asincrono
console.log("-----setTimeout---------");
//para tener algun conctron debemos guardarlo en una variable
let timer = setTimeout(
//CALLBACK
function () {
    console.log("Estudiamos en el SENA Galan y somos cognitus");
}, 6000);
console.log("No espero a que termine el setTimeout");
console.log("-----FUNCION FLECHA SIN ARGUMENTOS---------");
let flechaSinParametros = () => console.log("Flecha sin argumentos");
flechaSinParametros();
console.log("-----Funcion flecha con un argumento y una instrucción---------");
let saludoViajero = (nombre) => nombre;
let saludoRetornado = saludoViajero("Maria");
console.log("saludo: ", saludoRetornado);
console.log("-----Funcion flecha con dos argumentos y mas de una instrucción---------");
//cuando l flecha tiene mas de una instruccion se usan llaves y se usa return
let flechaVariasInstrucciones = (edad, peso) => {
    let edadUsuario = edad;
    let pesoUsuario = peso;
    return console.log("Edad: ", edadUsuario, " Peso: ", pesoUsuario);
};
