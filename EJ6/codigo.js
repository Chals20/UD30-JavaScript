var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function letraDNI(){
    let dni = document.getElementById("dni").value; //leemos dni introducido
    if(dni > 0 && dni < 99999999){               
        
        let letra = document.getElementById("letra").value; //leemos letra
        
        if(letra === letras[dni % 23]){ //calculo para saber que letra corresponde
            alert("La letra introducida es CORRECTA");
        }else{//si no es correcta entra aquí
            alert("La letra introducida es INCORRECTA");
        }
    }else{ //si numero menor a 0 o mayor a 99999999, error
        alert("El número introducido NO es válido");
    }
    
}