function esPar(){

    let num = document.getElementById("num").value; //leemos numero

    if(num % 2 === 0){  //si el resto de la division entre dos es cero, sera par
        return alert("Par");
    }else{
        return alert("Impar");
    }
}