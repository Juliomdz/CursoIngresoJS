/*
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares
 según la estación del año estemos, informar si "Se viaja"
  o "No se viaja" a ese lugar.

en Invierno: Solo Bariloche informa "se viaja".
los demas destinos "No se viaja".

en Verano: Se viaja a Mar del plata y Cataratas solamente.

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche.
*/


function mostrar()
{
	let estacionIngresada = txtIdEstacion.value;
	let destinoIngresado = txtIdDestino.value;

	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja.");
				break;
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					alert("No se viaja.");
				break;
			}
			break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
				case "Cordoba":
					alert("No se viaja.");
				break;
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja.");
				break;
			}
			break;
		case "Otoño":
			switch (destinoIngresado)
			{
				case "Cordoba":
				case "Cataratas":
				case "Bariloche":
				case "Mar del plata":
					alert("Se viaja.");
				break;
			}
			break;
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Cordoba":
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja.");
				break;
				case "Bariloche":
					alert("No se viaja.");
			}
			break;
	}
}//FIN DE LA FUNCIÓN