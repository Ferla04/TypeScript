//GRAVEDAD es una constante, por estandar las
//constantes van en mayuscula. Una constante no
//puede cambiar su valor
const GRAVEDAD = 9.8;
//se declara e inicializa una variable edad tipo numerica
let edad: number = 10;
//se declara una variable peso de tipo numerico
let peso: number;
//se inicializa la variable peso con valor 15
peso = 15;
//variable booleana solo recibe true o false
let estado: boolean = false;
estado = true;
//variable tipo string
let nombre: string = "ADSI 2021";
nombre = "ADSI 2021 ANGULAR";
//variable tipo any, recibe cualquier dato
//se usa cuando no sabemos con seguridad
//con que tipo de valor estamos trabajando
let cualquiera: any = "20";
cualquiera = 20;
//nombremos variables y funciones con lowerCamelCase
//y se usa UpperCamelCase para las clases p.e. LoginController
let estadoUsuarioNuevo: string = "activado";
//ejemplo template de strings `` se llaman backticks
let nombreUsuario: string = "Pepe Perez";
let ciudad: string = "Armenia";
let mensaje: string = `Bienvenido(a) ${nombreUsuario} a la ciudad de ${ciudad}`;
console.log("-------template de strings----------");
console.log(mensaje);
//arreglos+
//arreglo que guarda solo numeros
let numeros: number[] = [1, 50, 23];
console.log("-------elementos de un arreglo accedidos indice----------");
console.log("elemento de indice 1: ", numeros[1]);
//arreglo que recibe elementos de cuqluier tipo
let arregloCualquiera: any[] = ["veinte", 20, true];
console.log("elemento de indice 0: ", arregloCualquiera[0]);
//for-of para recorrer el arreglo numeros
console.log("-------elementos de un arreglo con for-of----------");
for (const elemento of numeros) {
    console.log("elemento: ", elemento);
}
//objeto meses en typescript. Son conformados por
//pares propiedad-valor
let meses: any = { enero: "Enero", febrero: "Febrero" };
//accdemos a los valores de las propiedades del objeto con [] 
//y propiedad entre comillas
console.log("-------propiedades de un objeto mediante llave usando []----------");
console.log("valor de la propiedad enero: ", meses["enero"]);
console.log("valor de la propiedad febrero: ", meses["febrero"]);
//se usa el for-in para recorrer los objetos
console.log("-------llave y valor de un objeto mediante ciclo for----------");
for (const llave in meses) {
    console.log("llave: ", llave);
    console.log("valor: ", meses[llave]);
}
//ciclo for
console.log("-------indice de ciclo for----------");
for (let index = 0; index < 10; index++) {
    console.log("indice: ", index);
}
//ciclo while
let x = 0;
console.log("-------valor de contador de ciclo while----------");
while (x < 10) {
    console.log("valor equis: ", x);
    x++;
}