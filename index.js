//Has hecho una compra y sabes el precio del producto y su iva. 
//Haz un script que te calcule el precio total que vas a pagar por tu compra.
//Te recuerdo que para calcular el total debes sumar al precio el resultado 
//de multiplicasr precio por el iva y dividir por 100.

let producto = 350;
let iva = 19;
let resultado = producto + (producto * iva)/100;

console.log(resultado);

//Un poco de interactividad. En este ejercicio debes escribir un programa que 
//lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.
//Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"

//let nombre = prompt("por favor introduzca su nombre:");
//let saludo = "hola "  + nombre; 
//console.log(saludo);


//En este ejercicio vas a pedir al usuario que teclee tres números enteros 
//y el script mostrará como resultado el valor medio de los tres.
//Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

//let numero1 = parseInt (prompt("digite el primer numero:"))
//let numero2 = parseInt (prompt("digite el segundo numero:"))
//let numero3 = parseInt (prompt("digite el tercer numero:"))
//let total = numero1 + numero2 + numero3/3;
//console.log(total);

//4.Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 
//5 huevos y 300 gramos de cebolla. 
//Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias

//var comensales, papas, huevos, cebollas;
//comensales = parseInt(prompt("Comensales"));
//papas = comensales*200;
//papas = papas/1000;    //en kilos
//huevos = papas*5;
//cebollas = papas*300;
//console.log("Patatas " + papas+" kilos");
//console.log("Huevos " + huevos);
//console.log("Cebolla "+ cebollas +" gramos");

//-------------------------------CONDICIONALES -----------------------

//1. Se trata de escribir un script que diga si un número es par o es impar.
//Recordemos que un número es par si al dividirlo por 2 da como resto 0.

//let numero = prompt("por favor introduzca un numero:");

//if (numero %2 == 0){
  //console.log("el numero"  + " "  +  numero +  " es par");
//}
//else{
  //console.log("el numero " + " "  + numero +  " es impar");
//}

//2. Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente 
//puede pedir vino, cerveza, 
//refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda 

let barra1 = prompt("Que Desea: Vino , Cerveza , refresco o Agua?");
let bebida1 = "vino"
let bebida2 = "cerveza" 
let comida1 = "agua"
let comida2 = "refresco"

if (barra1 === "vino"){
    console.log("Dirigete a la barra de bebidas");
}

else if (barra1 === "cerveza"){
    
    console.log("Dirigete a la barra de bebidas");
    
}

 else if ( barra1 === "agua") {
    console.log("Dirigete a la barra de comidas")
}

 else if ( barra1 === "refresco") {
    console.log("Dirigete a la barra de comidas")
}

else{
    console.log("introduzca una opcion correcta")
}


//3. Vamos a convertir notas en niveles usando un if anidados. Notas menor de 5 suspenso, 
//5-6 aprobados, 7-8 notables, 9-10 sobresalientes



