/*
Enunciado:
al presionar el botón pedir un número.
 Informar si el numero es PRIMO o no.
*/
function mostrar()
{
	let numeroIngresado;
	let primo;

	primo=true;
	numeroIngresado = parseInt(prompt("ingrese un numero:"));
	for (let i=2;i<numeroIngresado; i++)
	{
		if (numeroIngresado%i==0)
		{
			primo=false;
		}
	}
	if(primo==true)
	{
		alert("El numero "+numeroIngresado+" es primo.");
	}
	else if(primo==false)
	{
		alert("El numero "+numeroIngresado+" NO es primo.");
	}
}//FIN DE LA FUNCIÓN