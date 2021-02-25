/*
Enunciado:
al presionar el botón repetir
 el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
	let numeroIngresado;

	for (let i=0;; i++)
	{
		numeroIngresado = parseInt(prompt("ingrese un numero:"));
		if (numeroIngresado==9)
		{
			break;
		}
	}
}//FIN DE LA FUNCIÓN