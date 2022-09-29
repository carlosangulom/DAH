function fcnSumarUno( n, fcnResultadoCallBack ){
    setTimeout(function(){
      fcnResultadoCallBack( n + 1 );
    }, 800);
}

fcnSumarUno (10, function(nuevoValor1){
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        fcnSumarUno(nuevoValor2, function(nuevoValor3){
            console.log("Resultado:", nuevoValor3);
        });
    });
});