//tipos de variables
//numerica
let edad12: number = 31;
//string
let nombreUsuario2: string = "Pepe Perez";
//booleano
let estadoUsuario: boolean = false;
//any
let datoDesconocido: any = 100;
//declarar
let declarada: string;
//inicializar
declarada = "Esto es un string";
//imprimir
console.log("Hola tec Plus");
console.log("-------------------");
//arreglos
//arreglo tipo numerico
let edadesTecPlus: number[] = [17, 20, 25.2];
//arreglo tipo string
let nombresTecPlus: string[] = ["Lizeth", "Carlos", "Juliana"];
//arreglo que reciba diferentes datos
let arregloDiferentesDatos: any[] = ["Lizeth", 20, true];
//lectura
console.log(arregloDiferentesDatos[0]);
//recorrido
for (const edad of edadesTecPlus) {
    console.log("Edad: ", edad);
}
//objetos
let preciosSuper: any = { arroz: 2000, aceite: 5000 };
//lectura
console.log("valor de la propiedad arroz: ", preciosSuper["arroz"]);
//recorrido con for-in
for (const propiedad in preciosSuper) {
    console.log("propiedad: ", propiedad);
    console.log("valor: ", preciosSuper[propiedad]);
}
