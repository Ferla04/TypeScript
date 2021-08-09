// ● Cree y ejecute una promesa que siempre se resuelva,y que lo haga con un string “Somos programadores, hacemos mover el mundo”, de tal manera que en su .then, se imprima tal string mediante console.log

let programadores = new Promise((resolve, reject) =>{
    resolve('somos programadores, hacemos mover el mundo');
});

programadores
    .then(res => {
        console.log(res);
    }).catch(err =>{
        console.log(err.message);
    });


// ● Cree y ejecute una promesa que siempre se rechace y que lo haga con un string “Ha ocurrido un error desconocido.”, de tal manera que en su .catch, seimprima tal string mediante console.log

let prom = new Promise((resolve, reject)=>{
    reject(new Error('Ha ocurrido un error desconocido.'));
})

prom.catch(err =>{
    console.log(err.message);
})


// ● La entrega de subsidios en una institución pública depende de si el estrato de la persona es menor o igual a 2. Cree un programa que implemente una variable que guarde el estrato del usuario y mediante la evaluación de tal variable, muestre si el usuario tiene derecho o no a un subsidio usando promesas,de tal manera que si la variable contiene un valor numérico entre 1 y 6, la promesa se resuelva con un string que indique si el usuario tiene o no derecho al subsidio,tal string deberá ser imprimido en el .then de la promesa con console.log. En caso de que la variable contenga un valor nó válido la promesa se debe rechazar lanzando el siguiente error: new Error("Estratono válido"), tal error debe ser mostrado en el .catch de la promesa de la siguiente manera: console.log('Ha ocurrido un error: ', err.message),tenga en cuenta que err, es la información del error(motivo de rechazo)  que se pasa desde el reject al catch como parámetro de nombre err.

let numSubsidio: number = 7;
let subsidio = new Promise((resolve, reject) => {
    if(numSubsidio < 7  && numSubsidio > 0){
        if(numSubsidio <= 2){
            resolve('Tiene derecho a un subsido');
        }else{
            reject(new Error('No tiene derecho a un subsidio'));
        }
    }else{
        reject(new Error('Estrato no válido'));
    }
})

subsidio
    .then(res =>{
        console.log(res);
    }).catch(err =>{
        console.log('Ha ocurrido un error: ', err.message)
    })

// ● Cree una promesa que implemente 4 métodos .then encadena de tal manera que la promesa se resuelva inicialmente con el valor 2 <resolve(2)> y los siguientes métodos .then eleven alcuadrado el valor pasado, imprimiendo al final elmensaje “el valor final es: X” donde x es elresultado final del encadenamiento.

let alCuadrado = new Promise((resolve, reject) => {
    resolve(2);
})

alCuadrado
    .then((res: any) =>{
        console.log(res);
        return res **2;
    }).then((res) =>{
        console.log(res);
        return res **2;
    }).then((res) =>{
        console.log(res);
        return res **2;
    }).then((res) =>{
        console.log('el valor final es: ', res);
    }).catch(err => {
        console.log(err.message);
    })

// ● Cree tres promesas promesa1, promesa2 y promesa3, de tal manera que la promesa1 siempre se resuelva con la cadena “Somos ADSI”, que la promesa2 tenga dos opciones, resolverse o rechazarse; de tal forma que si se resuelva lo haga con la cadena “ Somos programadores” ,pero si se rechaza lo haga lanzando un error “Promesa2 no cumplida” (use una variable y uncondicional doble para controlar la resolución o rechazode la promesa, p.e. una variable estado,velocidad, edad etc). Por último, la  promesa3 siemprese debe resolver con la cadena “,Hacemos mover el mundo”. Encadene las promesas detal manera que cuando la promesa1 se cumpla, imprima desde su .then el mensaje con el quese resolvió y retorne la promesa2 ycuando ésta última se cumpla, imprima desde su .thenel mensaje con el que se resolvió yretorne la promesa3, y cuando la promesa 3 se cumplaimprima desde su .then el mensaje conel que se resolvió. Implemente .catch para manejarel error que puede ocurrir en la promesa2, encaso de que ocurra el rechazo, imprima el mensajedel error mediante err.message.
let estado : boolean = true;

let promesa1 = new Promise((resolve, reject) => {
    resolve('Somos Tipado');
})
let promesa2 = new Promise((resolve, reject) => {
    if(estado){
        resolve('Somos Programadores');
    }else{
        reject(new Error('Promesa 2 no cumplida'));
    }
})
let promesa3 = new Promise((resolve, reject) => {
    resolve('Hacemos mover el mundo');
})

promesa1
    .then(res => {
        console.log(res);
        return promesa2;
    }).then(res => {
        console.log(res);
        return promesa3;
    }).catch(err =>{
        console.log(err.message)
        return promesa3;
    }).then(res => {
        console.log(res);
    })

// ● Cree una promesa cuyo resolve y reject dependan cadauno de una llamada asíncrona usandosetTimeout  y así, su rechazo o resolución dependerádel proceso asíncrono que termineprimero. Implemente métodos .then y .catch. Si lapromesa se rechaza, lance el error con newError(‘info error’) en el reject e imprima el stackdel error en .catch, si se cumple, resuelva lapromesa con la cadena “promesa resuelta” e imprímaloen el .then

let primero = new Promise((resolve, reject) =>{
    function resolver(){
        resolve('Promesa resuelta');
    }
    function denegada(){
        reject(new Error('Info error'));
    }

    setTimeout(resolver, 4000);
    setTimeout(denegada, 5000);
})

primero
    .then(res =>{
        console.log(res);
    }).catch(err =>{
        console.log(err.message);
    })


// ● Cree cuatro promesas donde cada una para resolversedependa de un setTimeout, de talmanera que cada promesa se resuelva en tiempos diferentes.Ejecute las cuatro promesas deforma paralela, e imprima los cuatro resultados deresolución(recuerde que estos resultados vanen un arreglo, se sugiere use .foreach). No olvide.catch, qué pasa si una de las promesas falla alestar las cuatro en paralelo ?. Haga una implementaciónde Promise.race con dos de laspromesas anteriores.

let uno = new Promise((resolve, reject) =>{
    function resultado(){
        if(estado){
            resolve('Promesa uno cumplida');
        }else{
            reject(new Error('Error en la promesa uno'));
        }
    }
    setTimeout(resultado, 2000);
});

let dos = new Promise((resolve, reject) =>{
    function resultado(){
        if(estado){
            resolve('Promesa dos cumplida');
        }else{
            reject(new Error('Error en la promesa dos'));
        }
    }
    setTimeout(resultado, 6000);
});

let tres = new Promise((resolve, reject) =>{
    function resultado(){
        if(estado){
            resolve('Promesa tres cumplida');
        }else{
            reject(new Error('Error en la promesa tres'));
        }
    }
    setTimeout(resultado, 3000);
});

let cuatro = new Promise((resolve, reject) =>{
    function resultado(){
        if(estado){
            resolve('Promesa cuatro cumplida');
        }else{
            reject(new Error('Error en la promesa cuatro'));
        }
    }
    setTimeout(resultado, 5000);
});

Promise.all([uno,dos,tres,cuatro])
.then(array =>{
    array.forEach(e =>{
        console.log(e);
    })
}).catch(err =>{
    console.log('El error cometido fue: ', err.message);
});

Promise.race([uno,dos,tres,cuatro])
.then(resultado =>{
    console.log('La más rápida fue: ', resultado);
})