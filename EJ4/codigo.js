//array valores (diferentes tipos)
var valores = [true, 5, false, "hola", "adios", 2];

let mayor=''
if(valores[3]>valores[4]){
    mayor=valores[4]
    console.log(mayor+" es mayor")
}else{
    mayor=valores[3]
    console.log(mayor+" es mayor")
}

if(valores[1]>valores[5] === valores[0]){   //5>2 es igual a true
    console.log(valores[1]+" es mayor que "+valores[5]+", TRUE")
}

if(valores[1]<valores[5] === valores[2]){   //5<2 es igual a false
    console.log(valores[1]+" no es menor que "+valores[5]+", FALSE")
}

//Operaciones
console.log("Suma valores numéricos: "+(valores[1]+valores[5]));
console.log("Resta valores numéricos: "+(valores[1]-valores[5]));
console.log("Multiplicacion valores numéricos: "+(valores[1]*valores[5]));
console.log("División valores numéricos: "+(valores[1]/valores[5]));
console.log("Diferencia valores numéricos: "+(valores[1]%valores[5]));