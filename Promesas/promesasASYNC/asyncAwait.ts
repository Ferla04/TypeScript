// ● Cree una función que reciba como argumento un número y retorne el cuadrado de éste cómo una promesa usando Async para ello. Luego, llame a lafunción y trate de imprimir su valor de retorno. ¿Cuáles el resultado de la impresión? ¿un valor numérico? ¿una promesa ?

async function numPromesa(numero: number) {
    return numero **2;
};

console.log(numPromesa(2));
// el resultado es una promesa con el valor de la operación --> Promise { 4 }


// ● Cree una función llamada “resultado” que retorne unapromesa usando “return new Promise”, de talmanera que la promesa en su bloque de instruccionesimplemente setTimeout demorandose seissegundos para resolverse con valor 8. Luego, llamea la función e imprima su resultado, ¿qué resultadoobtiene? ¿una promesa?, ¿ un entero ?

function resultado(){
    return new Promise((resolve, reject) =>{
        function numero(){
            resolve(8);
        }
        setTimeout(numero, 6000);
    })
}

//console.log(resultado());
// el resultado es una promesa con el valor de pendiente--> Promise { <pending> } y despues se demoro 6s

// ● Cree una función llamada “cuadradoAsincrono” que llame en su bloque de instrucciones a la función“resultado” definida anteriormente, de tal maneraque la ejecución se detenga hasta obtener el valor retornado por “resultado”, luego, que eleve tal valor al cuadrado y este sea impreso. Use Async - Await.¿Qué imprimió ?  ¿una promesa?, ¿ un entero ?

async function cuadradoAsincrono(){
    let valorRetornado :any = await resultado();
    //el valor retornado fue  8 despues lo colocamos al cuadadro
    valorRetornado = valorRetornado **2;
    console.log(valorRetornado);
}

cuadradoAsincrono();
//El resultado fue un entero