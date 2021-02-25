/*
Enunciado:
al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado,
 y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	let numeroIngresado;
	let arrayPares=[];
	let acumuladorDePares=0;

	numeroIngresado = parseInt(prompt("ingrese un numero:"));
	for (let i=1;i<=numeroIngresado; i++)
	{
		if (i%2==0)
		{
			arrayPares.push(i);
			acumuladorDePares++;
		}
	}
	for (let j=0; j<acumuladorDePares ; j++)
	{
		alert("se halló: "+arrayPares[j]+".");
	}
	alert("La cantidad de numeros pares encontrados es: "+acumuladorDePares);
}//FIN DE LA FUNCIÓN

