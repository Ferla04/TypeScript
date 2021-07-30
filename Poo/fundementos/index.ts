/*
¿Que es la programacion Orientada a Objetos?
Es un paradigma de programacion que busca abstraer la logica para encapsularla en objetos.
-propiedades, metodos y instancia.
*/

// Principios:
// ● Abstraccion: Capacidad de abstraer algo hacia nuestro codigo para convertirlo en una clase.

class Car{
    year: number;
    color: string;
    model: string;
    private _fuel: number;

    constructor(model: string,year: number, color: string, fuel: number){
        this.year = year; //Propiedades
        this.color = color;
        this._fuel = fuel;
        this.model = model;
    }

    start(): void{ //metodos

    }
    acelerate(): void{
        this._fuel--;
    }
    stop(): void{

    }

    get fuel() :number{
        return this._fuel;
    }
    
}

// instancia
let car = new Car('FER123',2020,'Rojo',10);

/*● Encapsulamiento:Proteger nuestras propiedades del acceso no autorizado
Colocar las propiedades en privado y obtenerlas con get y set*/
car.acelerate();
console.log(car.fuel);    
// fuel es una propiedad privada y solomante se puede leer, No modificar sin un SET

// ● Herencia: La cualidad de heredar las cualidades de otra clase.

class Ferrari extends Car{
    openSunroof(){

    }
    closeSunroof(){
        
    }
}

class Porsche extends Car{
    
}

let ferrari = new Ferrari('JMF',2020,'Rojo',15);
let porsche = new Porsche('HJS',2020,'Azul',13);

ferrari.openSunroof();


// ● Polimorfismo: Clases distintas que comparten mismos metodos y propiedades pueden comportarse de manera indiferente. COLOCAR EN FUNCIONES COMO ARGUMENTO QUE SEA EL TIPO DE CLASE PADRE.
/*
MAL
//                            _____ Tipo de clase en el argumento PERO SOLO FUNCIONARÁ CON EL
//                            |     ferrari, PORQUE PORSCHE NO TIENE EL MISMO CONTENIDO QUE FERRARI
function ObtenerModel(car: Ferrari){
    return console.log(car.model);
}

console.log(ObtenerModel(porsche)); --> NO FUNCIONA
*/

//BIEN
//                          _____ Tenemos que poner como tipo de argumento la clase PADRE car para 
//                          |     tome tanto las clases HIJOS ferrari y porsche
function ObtenerModel(car: Car){
    console.log(car.model);
}

console.log(ObtenerModel(porsche));
console.log(ObtenerModel(ferrari));

/* EXPORT E IMPORT */
/*el export se pone en la clase cuando solo vamos a exportar uno
export class Car{}
SI SON VARIOS SE PONE
export{
    Car, Porsche, Ferrari
}
*/
/*
el import es para ponerlo en el documento que queremos que importar
import{Ferrari, Porsche, Car} from './car' --> documento donde esta el export
*/