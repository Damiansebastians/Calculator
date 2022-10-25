

function calcular(){

    //Tomamos los datos del formulario
        var valor1=parseInt(document.calculo.dato1.value);
        var valor2=parseInt(document.calculo.dato2.value);
        
    //Definimos la operación
        var suma=valor1+valor2;
        var resta=valor1-valor2;
        var multiplicacion=valor1*valor2;
        var divison=valor1/valor2;
        
    if(document.calculo.operaciones.value=="suma"){
        document.calculo.mensaje.value=("La suma es " + suma);
    }
    if(document.calculo.operaciones.value=="resta"){
        document.calculo.mensaje.value=("La resta es " + resta);
    }
    if(document.calculo.operaciones.value=="multiplicacion"){
        document.calculo.mensaje.value=("La multiplicación es " + multiplicacion);
    }
    if(document.calculo.operaciones.value=="division"){
        document.calculo.mensaje.value=("La división es " + divison);
    }
}