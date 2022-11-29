function factorial(){
    
    let numero = document.getElementById("numero").value; //leemos numero introducido

    let res = numero;
    for(let i = numero; i > 1; i--){ //bucle para ejecutar el factorial
        res = res * (i-1);
    }

    alert("El factorial de "+ numero +" es "+res);
}