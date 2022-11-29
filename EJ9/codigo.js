function mayuscula(){

    let texto = document.getElementById("texto").value; //leemos texto introducido
    
    if(texto === texto.toUpperCase()){ //comparamos con mayusculas con la funcion toUpperCase
        alert("El texto está en mayúsculas");
    }else if(texto === texto.toLowerCase()){//comparamos con minusculas con la funcion toLowerCase
        alert("El texto está en minúsculas");
    }else{
        alert("El texto contiene mayúsculas y minúsculas");
    }
}