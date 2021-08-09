//----------------------------------------EJERCICIO-1--------------------------------------//

//● Dos variables lógicas
let calor: boolean = false;
let cansancio: boolean = true;

//●Dos variables numéricas
let edad: number = 17;
let año: number = 2021;

//●Dos variables any
let teoria: any = 'true';
let cualquiera: any = 2;

//●Dos variables string
let nombre: string = 'Fernanda';
let apellido: string = 'Velásquez';

//●Cree una plantilla de strings para mostrar un mensajede bienvenida al usuario luego deregistrarse en nuestro sitio, por ejemplo. “BienvenidaPaula Pérez a nuestro sitio web, gracias porregistrarte”. Este template debe usar dos variables,nombresyapellidos
console.log(`Bienvenida ${nombre} ${apellido} a nuestro sitio web, gracias por registrarse`);

//----------------------------------------EJERCICIO-2--------------------------------------//
/*Declare e inicialice:*/

//● Una variable array de números que contenga cinco elementose imprima cada uno de sus elementos.
let FCumple: number[] = [4,10,3,26,2];
//FCumple.forEach(i => console.log(i));

//● Una variable array de strings que contenga cinco elementose imprima cada uno de sus elementos.
let frutas: string[] = ['fresas','uvas','papaya','lulo','curuba'];
//frutas.forEach(i => console.log(/*i*/));

//● Recorra cada array creado usando for-of e imprimiendocada uno de sus elementos
for(let value of FCumple){
    //console.log(value);
}

for(let value of frutas){
    //console.log(value);
}

//----------------------------------------EJERCICIO-3--------------------------------------//
/*Declare e inicialice:*/
//●Una variable tipo objeto cuyos valores sean los días de la semana
let diasSemana: any = {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
    7: 'Domingo'
}

//●Una variable tipo objeto cuyos valores sean los númerosdel 0 al 9
let ObjNumero:any = {0:1, 1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9};

//●Recorra cada objeto creado usando for-in e imprimiendo cada uno de sus valores

for(const KEY in diasSemana){
    //console.log(diasSemana[KEY]);
}

for(const KEY in ObjNumero){
    //console.log(ObjNumero[KEY]);
}

//----------------------------------------INVESTIGACION--------------------------------------//

//Investigue:cómo eliminar elementos de un array,agregar elementos, leer y actualizar elementos.Implemente ejemplos prácticos.

/*
ELIMINAR: 
● ultimo elemento .pop 
● primer elemento .shift 
● elemnto en especifico .splice
*/
let arrayEliminar: string[] = ['Fer','Pardo','Juan','Camila'];
let eliminarUltimo: any = arrayEliminar.pop();
let eliminarPrimero: any = arrayEliminar.shift();
let eliminarEspecifico: any = arrayEliminar.splice(0,1);

/*
AGREGAR:
● primer posicion .unshift
● primer posicion .push
● primer posicion .splice
*/
let arrayAgregar: string[] = ['Juan'];
arrayAgregar.unshift('Camila');
arrayAgregar.push('Fer');
arrayAgregar.splice(2, 0, 'Pardo');
//console.log(arrayAgregar);

/*
leer y actualizar elementos
● Leer: array[posicion]
● Actualizar: array[posicion]= valor;
*/

let arrayLeerActualizar: string[] = ['Fer','Juan','Camila'];
//console.log(arrayLeerActualizar[0]);
arrayLeerActualizar[0] = 'Pardo';
//console.log(arrayLeerActualizar);

//----------------------------------------EJERCICIO-4--------------------------------------//

//Investigue:cómo eliminar elementos clave-valor de un objeto, cómo leer  y actualizar valores. Implementeejemplos prácticos.

let diasSemana2: any = {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
    7: 'Dormir'
}

//Leer y actualizar
//console.log(diasSemana2[1]);
diasSemana2[7] = 'Domingo';

//Agregar
diasSemana2[8] = 'NO existe';
//console.log(diasSemana2);

//eliminar
delete diasSemana2[8];
//console.log(diasSemana2);

//----------------------------------------EJERCICIO-5--------------------------------------//

let numerosWhile: number[] = [];
let j: number = 1;

while(j <= 10){
    numerosWhile.push(j);
    j++
}
console.log(numerosWhile);

let numeroFor: number[] = [];
let numero1: number = 0;
let numero2: number = 1;

for(let i: number = 0; i < 6; i++){
    let suma: number = numero1 + numero2;
    numero1 = numero2;
    numero2 = suma; 
    numeroFor.push(suma);
}

console.log(numeroFor);