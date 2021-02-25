/*
Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir
 el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	let cantidadDeseadaDeRepes;

	cantidadDeseadaDeRepes = parseInt(prompt("ingrese el número de repeticiones:"));
	for (let i=0; i<cantidadDeseadaDeRepes; i++)
	{
		alert("Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN