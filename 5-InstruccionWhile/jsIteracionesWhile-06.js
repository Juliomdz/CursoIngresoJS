/*
Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada
 y el promedio.
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	while (contador<5)
	{
		numeroIngresado=parseInt(prompt("Ingrese un numero:"));
		acumulador=acumulador+numeroIngresado;
		contador++;
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}//FIN DE LA FUNCIÓN