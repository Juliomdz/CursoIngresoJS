/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;
	do
	{
		numeroIngresado=parseInt(prompt("Ingrese un numero:"));
		if (numeroIngresado>0) 
		{
		sumaPositivos=sumaPositivos+numeroIngresado;	
		}
		else
		{
		multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
		}
		contador++;
		respuesta=confirm("¿Desea seguir ingresando numeros?");
	}
	while (respuesta);
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN