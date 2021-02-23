/*
JULIO MENDEZ - DIVISION G
Enunciado:
WHILE
1. Ingresar 5 numeros, y determinar la cantidad de numeros que
 son mayores que 10 y menores 20 (incluisive en ambos casos)
*/

/*
function mostrar()
{
	let numeroIngresado;
	let contador;
	let numerosEnRango;

	contador=0
	numerosEnRango=0
	while(contador<5)
	{
		numeroIngresado=parseInt(prompt("ingrese un numero:"));
		contador=contador+1;
		if(numeroIngresado >= 10 && numeroIngresado <= 20)
		{
		numerosEnRango=numerosEnRango+1;
		}
	}
	alert("La cantidad de numeros ingresados que se encuentran en el rango dado es "+numerosEnRango+".");
}
*/
	/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
/*
function mostrar()
{
	alert('iteración while');

	
}
*/
//FIN DE LA FUNCIÓN

/*
JULIO MENDEZ - DIVISION G
Enunciado:
WHILE
2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario).
 Mostrar tambien el promedio de los numeros que cumplen la condicion.
*/
/*
function mostrar()
{
	let numeroIngresado;
	let contador;
	let numerosEnRango;
	let respuesta;
	let promedio;

	contador=0
	numerosEnRango=0
	respuesta="si"
	while(respuesta=="si")
	{
		numeroIngresado=parseInt(prompt("ingrese un numero:"));
		contador=contador+1;
		if(numeroIngresado >= 10 && numeroIngresado <= 20)
		{
		numerosEnRango=numerosEnRango+1;
		}
		respuesta=prompt("¿Desea ingresar mas numeros?(Responda en minusculas.)");
	}
	promedio=(numerosEnRango/contador)
	alert("La cantidad de numeros ingresados que se encuentran en el rango dado es "+numerosEnRango+", y el promedio de numeros por intento es de "+promedio+".");
}

*/
/*
function mostrar()
{
	let numeroIngresado;
	let contador;
	let numerosAcumulados;

	contador=0;
	numeroIngresado=0;
	numerosAcumulados=0;
	while(contador<5)
	{
		numeroIngresado=parseInt(prompt("ingrese un numero:"));
		numerosAcumulados=numerosAcumulados+numeroIngresado;
		contador=contador+1;
	}
	alert("La sumatoria de todos los numeros ingresados es: "+numerosAcumulados+".");
}
*/

/*
ENUNCIADO:
al presionar el botón mostrar
 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
 */

function mostrar()
{
	let contador;
	let numerosAcumulados;

	contador=0;
	numerosAcumulados=0;
	while(contador<10)
	{
		numerosAcumulados++;
		alert("El número es: "+numerosAcumulados);
		contador=contador+1;
	}
}