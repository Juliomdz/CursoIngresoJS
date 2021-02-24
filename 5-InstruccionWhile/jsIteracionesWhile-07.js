/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	
	contador=0;
	acumulador=0;
	respuesta=true;
	do
	{
		numeroIngresado=parseInt(prompt("Ingrese un numero:"));
		acumulador=acumulador+numeroIngresado;
		contador++;
		respuesta=confirm("¿Desea seguir ingresando numeros?");
	}
	while (respuesta);
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}//FIN DE LA FUNCIÓN