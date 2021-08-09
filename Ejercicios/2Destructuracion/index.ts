//--------------------------DESTRUCTURACION DE ARRAYS Y OBJETOS---------------------------//
//Investigue:Desestructuración de objetos y arreglos.Implemente 3 ejemplos prácticos diferentes a losplanteados en la guía de Typescript. La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

/*----------------------------------- Objetos -------------------------------------------------- */

let usuario ={
    nombre: 'Fernanda',
    apellido: 'Velásquez',
    edad: 17,
    familia: {
        madre: 'Alma',
        hermano: 'Cristian',
    },
    codigoColores: {
        amarillo: '#FFFF00',
        azul: '#0000FF',
        rojo: '#FF0000'
    }
}

//Ejemplo1
let {nombre, apellido, edad} = usuario;
console.log(nombre, apellido, edad);

//Ejemplo2
let {familia: {madre , hermano}} = usuario;
console.log(madre, hermano);

//Ejemplo3
let {codigoColores: {azul: blue}} = usuario;
console.log('Renombre la variable de amarillo a yellow ', blue);

//Ejemplo 4
function miColor({codigoColores: {amarillo}}: any){
    console.log(`mi color favorito es ${amarillo}`)
}
miColor(usuario);

/*----------------------------------- Arrays -------------------------------------------------- */

let arreglo = [1,2,3,4,5,6];
let [x,y] = arreglo;
console.log(x,y);

let [,,a,b,c,d = 0] = arreglo;
console.log(a,b,c,d);

// // ● Cree una función con un paraḿetro opcional tipo boolean,uno por defecto tipo string, y uno obligatorio detipo number. Haga el llamado a la función.

// function tiposParametros(ficha: number,examen: string = 'matematicas', estado?: boolean ){
//     if(estado){
//         console.log(ficha, examen, estado);
//     }else{
//         console.log(ficha,examen, 'no hay un estado');
//     }
// }

// tiposParametros(123,'hola');

// // ● Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el llamado a la función.

// let sumaNumeros = function(num1: number, num2: number){
//     let suma = num1 + num2;
//     return console.log(suma);
// }
// sumaNumeros(3,3);

// // ● Use setTimeOut para implementar un callback que se llame a los 5 segundos e imprima por consola el mensaje “HOLA ADSI”

// let tiempo = setTimeout(()=> console.log('HOLA ADSI!!'), 5000);
// console.log('VOY MAS RAPIDO QUE EL SERTIMEAOUT');

// // ● Cree una función flecha sin argumentos que imprima“Hola ADSI”.

// let superSaludo = () => console.log('HOLA ADSI');
// superSaludo();

// // ● Cree una función flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál fue la edad pasada como argumento, imprima el valor de vuelto por la función. Use paréntesis para el parámetro y omita la palabra reservada return

// let edadUsuario = (edad: number) => console.log(`La edad del usuario es ${edad}`);
// edadUsuario(17);

// // ● Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos, imprima el valor devuelto por la función. Use paréntesispara agrupar los parámetros,  no use la palabrareservada return

// let numMultiplicacion = (num1: number, num2: number) => {
//     let multi = num1 * num2;
//     console.log(multi);
// }
// numMultiplicacion(6,9);

// // ● Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima el valor devuelto por la función. La función debe tener dos instrucciones, una donde se declare e inicialicela variable módulo que contendrá el módulo de losd os números y la otra donde se retorne la variable módulo. Use paréntesis para agrupar los parámetros,use llaves para agrupar las dos instrucciones.

// let modulo = (num1: number, num2: number) => {
//     let modulo = num1 % num2;
//     return console.log(modulo);
// }

// modulo(12,2);