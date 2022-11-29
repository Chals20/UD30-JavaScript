function palindromo(){

    let texto = document.getElementById("texto").value; //leemos texto introducido
    let pal = "";

    for(let i = texto.length-1; i>=0; i--){ //recorremos el texto al reves
        
        pal += texto.charAt(i); //lo insertamos en la array pal
    }

    if(pal.replace(/\s+/g, '') === texto.replace(/\s+/g, '')){ //quitamos los espacios y comprobamos si el texto es palindromo
        alert("Es palíndromo!")
    }else{
        alert("No es palíndromo")
    }
}