/*
Enunciado:
al presionar el botón repetir
 el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
	let datoIngresado;

	for (let i=0;; i++)
	{
		datoIngresado = prompt("Se repetirá hasta que ingrese BREAK:");
		if (datoIngresado=="BREAK")
		{
			break;
		}
	}
}//FIN DE LA FUNCIÓN