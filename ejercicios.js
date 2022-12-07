//Has hecho una compra y sabes el precio del producto y su iva.
//Haz un script que te calcule el precio total que vas a pagar por tu compra.
//Te recuerdo que para calcular el total debes sumar al precio el resultado
//de multiplicasr precio por el iva y dividir por 100.

/*let producto = 350;
let iva = 19;
let resultado = producto + (producto * iva) / 100;

console.log(resultado);
*/

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

//let barra1 = prompt("Que Desea: Vino , Cerveza , refresco o Agua?");
///let bebida1 = "vino";
//let bebida2 = "cerveza";
//let comida1 = "agua";
//let comida2 = "refresco";

//if (barra1 === "vino") {
//console.log("Dirigete a la barra de bebidas");
//} else if (barra1 === "cerveza") {
//console.log("Dirigete a la barra de bebidas");
//} else if (barra1 === "agua") {
//console.log("Dirigete a la barra de comidas");
//} else if (barra1 === "refresco") {
//console.log("Dirigete a la barra de comidas");
//} else {
//console.log("introduzca una opcion correcta");
//}

//3. Vamos a convertir notas en niveles usando un if anidados. Notas menor de 5 suspenso,
//5-6 aprobados, 7-8 notables, 9-10 sobresalientes
/*let nota = parseInt(prompt('Ingresa la nota obtenida'))
    //si el dígito fué menor a 5
    if(nota<5){
        //aparece una alerta que dice:
        alert('Nota suspendida')
    }
    //si el digito fué 5 0 6
    else if(nota===5 || nota===6){
        //aparece una alerta que dice:
        alert('Nota aprobada')
    }
    //si el digito fué 7 u 8
    else if(nota===7 || nota===8){
        //aparece una alerta que dice:
        alert('Nota notable')
    }
    //si el digito fué 9 o 10
    else if(nota===9 || nota===10){
        //aparece una alerta que dice:
        alert('Nota sobresaliente')
    }
    //si el valor ingresado es diferente
    else{
        //aparece una alerta que dice:
        alert('Ingresa un número válido')
        //se repite la funcion
        resultadoNotas()
    }

//llamamos la función
resultadoNotas(); */


//----------------BUCLES FOR-------------

//1. Este script el usuario deberá teclear una letra y un número,
//y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.

/*let letra = prompt("por favor introduzca una letra:");
let numero = prompt('por favor introduzca un Numero:');
var union=''
for (let i = 0; i < numero; i++) {
  union+=letra
}
  console.log(union);*/

//2.Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y
//cuando pase de 4 su valor se pondrá a 0
//y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4

 /*for(var i=0 ; i<2 ; i++){ //creamos un segundo loop lado derecho del contador //una vez se cumpla la condición de este loop pasa al primero 
  for(var b=0 ; b<5 ; b++){ //imprimimos el resultado por cada recorrido 
    console.log(i+':'+b) } } 
    */


//3.
//Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero,
//el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará
//formada por una serie de astericos tan larga como diga el número de línea en el que está.
//Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.


/*let cadena=''
valorEntero= prompt("escriba cualquier numero");
for(let fila =0 ; fila<valorEntero; fila++ ){
   cadena=''


for(ancho =0 ; ancho<=fila; ancho++ ){
  cadena+='*'
}
console.log(cadena+ '\n') 
}
*/

//BUCLES WHILE 

//1. Por ejemplo en este bucle vamos a generar una lista con los 20 primeros números pares

/*let contador = 0;
const numerosPares = [];

while (numerosPares.length !== 20) {
    // Si el resultado de la division del contador entre 2 es 0, es un numero par
    if (contador % 2 === 0) {
        numerosPares.push(contador);
        contador = contador + 1;
        continue;
    }

    // De otra manera, es impar y solo debemos aumentar el contador
    contador = contador + 1;
}
*/


//2. Un ejemplo típico de bucle es averiguar si un número es primo, es decir,
// si solo es divisible por 1 y por si mismo.

/*var num = parseInt(prompt('Escriba un número entero'))
var direfenteDeUno = 2
while(direfenteDeUno<=num-1){
    if(num%direfenteDeUno==0 || num === 1){
        console.log('No es número primo')
    }
    else{
        console.log('Es número primo')
    }
    break
}
*/


//BUBLES DO WHILE 

//1. Realiza un script que le pida al usuario que teclee la letra A (en mayúscula) y
//mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes

/*const LETRA_REQUERIDA = 'A';

let textoIngresado = '';
let esPrimeraPeticion = true;

do {
    if (esPrimeraPeticion) {
        esPrimeraPeticion = false;
    } else {
        alert('Haz ingresado la letra incorrecta, inténtalo de nuevo')
    }
    
    textoIngresado = prompt(`Ingresa la letra "${LETRA_REQUERIDA}" tal como la vez`);
} while (textoIngresado !== LETRA_REQUERIDA)
*/


//FUNCIONES

//1. Crea una función que tenga dos argumentos: num1, num2, y que deuelva como 
//resultado la suma de ambos números. Se supone que se usarán solo números válidos.


/*function suma(num1, num2){
    //regresamos la operación de suma en los dos argumentos
    return num1+num2
}
console.log(suma(2,3)) 
*/



//2.Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, 
//teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 100 euros.

/*let precio =prompt("indruduzca el precio")
let impouesto=(19/100)
function pagoTotal(arg1, arg2){
  let precioImpuesto = arg1+(arg1*arg2)
  let descuento = (10/100)
  if(arg1>100){
    let totalDesc = precioImpuesto-(precioImpuesto*descuento) 
    return alert('por tu compra mayor a 100$ le aplicamos el descuento, su total es' +(totalDesc));

  }
  else{
    return alert('su total es de:' +(precioImpuesto));
  }
}
pagoTotal(precio,impouesto)

*/

//3.Escibe una función que devuelva el siglo al que correponde un 
//año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200....

/*let añoRandom = parseInt(prompt("Escribe el año al que quieras saber su siglo: "))
function conocerSiglo(año){
  //declaramos una variable que realice la operación para calcular el siglo
    let conocerSiglo = parseInt((año - 1)/100)+1
    //regresa el resultado
    return conocerSiglo
}
alert(`Pertenece al siglo ${conocerSiglo(añoRandom)}`)
*/




//ARRAYS 
//1. En este script deberás crear un array para guardar los nombres de los días de la semana,
// empezando por 0 para el domingo. Para comprobar el funcionamiento 
//pide al usuario un número entre 0 y 6 y devuelve el nombre del día. Se supone que el dato tecleado 
//estará entre 0 y 6.


/*let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Vienes", "Sábado"]
let user = parseInt(prompt("Introduce un número del 0 al 6"))
//Este número escogerá el valor dentro del array, por eso especificamos el rango
console.log(dias[user]) */

//2.Escribe una función que determina si la letra que se le pasa como argumento 
//se encuentra contenida dentro de un array de letras que se le pasa como segundo argumento.
//Se trata de resolverlo sin usar métodos del objeto array, solo el dato tipo array.

//Declaramos las variables
/*var ingresoLetra, listaLetras, incluye;
ingresoLetra = prompt('Ingresa una letra')
//Creamos la lista con algunas letras
listaLetras = ['a','b','c','d','e','f','g','h','i','j']
//se  crea la funcion 
function buscadorLetras(letras ,letra){
    incluye = letras.includes(letra)
    if(incluye===true){
        alert(`La letra "${letra}" se encuentra dentro de la lista`)
    } else{
        alert(`La letra "${letra}" no se encuentra dentro de la lista`)
    }
}
buscadorLetras(listaLetras, ingresoLetra) 
*/


//-------------------------------------CLASES Y OBJETOS-------------------------------------
/* 1.
Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las
calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTM, y el
objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá
el nombre y la media de sus calificaciones. */

//Para crear un objeto lo declarams dentro de un avariable y abrimos llaves
/*let calificaciones = {
    //Definimos las propiedades
    nombreAlumno: 'valen',
    ingles: 3.4,
    programacion: 4.5,
    htm: 3.7,
}
let media = (calificaciones.ingles + calificaciones.programacion + calificaciones.htm)/3
//Imprimimos el resultado
console.log(`La media de ${calificaciones.nombreAlumno} es de ${media}`) 
*/


/* 2.Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros
recorridos por una persona en cada sesión de ejercicios. Las propiedades de la clase serán:
nombre
sesiones
numsesioens
El nombre es el de la persona, en los sesiones se almacenará el numero de 
kilometros recorridos en cada sesión y numsesiones contien el número de sesiones anotadas.
Tiene dos métodos:
anotar: anota los kilómetros
media: calcula la media de kilómetros recorridos */

/*var kmPorSesion = {
  nombre: 'valen',
  sesion1: 2.4,
  sesion2: 3,
  sesion3: 2.7,
  sesion4: 2.9,
  numSesiones: 4,
  anotar:()=>{
      
  },
  media: ()=>{

  }
}
*/


//-------------------------------------LO BÁSICO DEL DOOM-------------------------------------
/* 1.
Tienes la página web modelo que debe cambiar el color del titular del negro actual a rojo y además
debe quedar centrado. El único cambio será en el bloque cambiar y el código de función cambiar() */



//---------------------------------------------------------------------------
/* 2.
En la página web modelo ves que tienes un titular Hola Mundo. Se trata de añadir una función
javascript para que al pulsar el botón cambiar este título se convierta en Hola Mundo con Javascript. 
El unico cambio necesario es el bloque con el texto cambiar y  completar la función cambiar() que
aparece en el código de la página.
ALGO DE EVENTOS 
Cambio HTML */