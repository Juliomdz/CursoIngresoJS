/*
Enunciado:
al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado,
 y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	let numeroIngresado;
	let acumuladorDeDivisores=0;

	numeroIngresado = parseInt(prompt("ingrese un numero:"));
	for (let i=1;i<=numeroIngresado; i++)
	{
		if (numeroIngresado%i==0)
		{
			alert(i+" es divisor de "+numeroIngresado+".");
			acumuladorDeDivisores++;
		}
	}
	alert("La cantidad de divisores de "+numeroIngresado+" encontrados es: "+acumuladorDeDivisores+".");
}//FIN DE LA FUNCIÓN