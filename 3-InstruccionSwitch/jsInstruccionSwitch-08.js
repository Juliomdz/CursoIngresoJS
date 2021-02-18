/*
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino.
*/
function mostrar()
{
	//tomo destino
	var destinoIngresado;
	
	destinoIngresado = txtIdDestino.value;
	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("En el destino ingresado hace FRIO.");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("En el destino ingresado hace CALOR.");
			break;
			default:
				console.log("no pasa naranja");
			break;	
	}


}//FIN DE LA FUNCIÓN