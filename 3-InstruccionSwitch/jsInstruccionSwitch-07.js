/*
Enunciado:
Enunciado:
Al selecionar un destino , indicar el punto cardinal
 de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste.
*/
function mostrar()
{
	//tomo destino
	var destinoIngresado;
	
	destinoIngresado = txtIdDestino.value;
	switch (destinoIngresado)
	{
		case "Bariloche":
			alert("El destino ingresado se encuentra al centro-sur de nuestro país.");
			break;
		case "Cataratas":
			alert("El destino ingresado se encuentra al noreste de nuestro país.");
			break;
		case "Mar del plata":
			alert("El destino ingresado se encuentra en la costa este de nuestro país.");
			break;
		case "Ushuaia":
			alert("El destino ingresado se encuentra al sur de nuestro país.");
			break;
			default:
				console.log("no pasa naranja");
			break;	
	}


}//FIN DE LA FUNCIÓN

