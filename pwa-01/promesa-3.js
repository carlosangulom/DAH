function sumarLento(n){

    return new Promise(function(resolve, reject){
        // if(n >= 5 ){
        //     reject('Sumar Lento Fallo');
        // }
        setTimeout(function(){
            resolve( n + 1 );
            }, 800);
    });
}

let sumarRapido = (n)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( n + 1 );
            }, 300);
    });
}

// Promise.all([sumarLento(5), sumarRapido(10)])
// .then(respuestas =>{
//     console.log('Respuestas:', respuestas);
// })
// .catch(error => {
//     console.log("Error en todas las promesas: ", error);
// });


let arregloVarios = [sumarLento(5), sumarRapido(10), true, '¡Hola Mundo!'];
Promise.all(arregloVarios)
.then(respuestas =>{
    console.log('Respuestas:', respuestas);
})
.catch(error=>{
    console.log("Error en todas las promesas: ", error);
});