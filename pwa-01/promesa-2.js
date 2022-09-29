console.log('Hola mundo');
function sumarUno( n ){
    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( n + 1 );
            }, 800);
    });
  return promesa;
}

// sumarUno(5).then( respuesta => {
//     console.log(respuesta);
// })

// sumarUno(5).then( respuesta=>{
//     console.log("Resultado:",respuesta);
//     return sumarUno(respuesta);
// }).then( respuesta=>{
//     console.log("Resultado:",respuesta);
//     return sumarUno(respuesta);
// }).then( respuesta=>{
//     console.log("Resultado:",respuesta);
// });

sumarUno(5)
    .then( sumarUno)
    .then( sumarUno)
    .then( respuesta=>{
    console.log("Resultado:",respuesta);
});