/*
JULIO MENDEZ
Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.
*/
function mostrar()
{
	let numeroRandom;
	
	numeroRandom = Math.floor(Math.random() * 100) + 1;
	if(numeroRandom >= 1 && numeroRandom <=10)
	{
	alert("Su número aleatorio es "+numeroRandom+ ".");
	}
	console.log(numeroRandom);
}//FIN DE LA FUNCIÓN