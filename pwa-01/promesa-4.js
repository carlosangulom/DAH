
function sumarLento( n ){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( n + 1 );
            }, 800);
    });
}

let sumarRapido = (n)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //resolve( n + 1 );
            reject('Error en la promesa de la funcion Sumar Rapido');
            }, 1000);
    });
}

Promise.race([sumarLento(5), sumarRapido(10)])
    .then(respuesta =>{
        console.log('Respuesta:', respuesta);
    })
    .catch(error=>{
        console.log("Error en la respuesta de la promesa: ", error);
    });