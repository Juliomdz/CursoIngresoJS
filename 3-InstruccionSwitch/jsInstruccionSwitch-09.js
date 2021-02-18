/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes ,
 se cobra $15.000 por cada estadia como base, se pide el ingreso
  de una estacion del año y localidad para vacacionar para poder
   calcular el precio final..

en Invierno: bariloche tiene un aumento del 20%
 cataratas y Cordoba tiene un descuento del 10%
  Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20%
 cataratas y Cordoba tiene un aumento del 10%
  Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10%
 cataratas tiene un aumento del 10%
  Mar del plata tiene un aumento del 10%
   y Cordoba tiene el precio sin descuento.
*/


function mostrar()
{
	let estacionIngresada = txtIdEstacion.value;
	let destinoIngresado = txtIdDestino.value;
	let tarifaBase = 15000;
	let diferenciaPorcentual;
	let precioFinal;

	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					diferenciaPorcentual = 1.2;
				break;
				case "Cataratas":
				case "Cordoba":
					diferenciaPorcentual = 0.9;
				break;
				case "Mar del plata":
					diferenciaPorcentual = 0.8;
				break;
			}
			break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					diferenciaPorcentual = 0.8;
				break;
				case "Cataratas":
				case "Cordoba":
					diferenciaPorcentual = 1.1;
				break;
				case "Mar del plata":
					diferenciaPorcentual = 1.2;
				break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Cordoba":
					diferenciaPorcentual = 1;
				break;
				case "Cataratas":
				case "Bariloche":
				case "Mar del plata":
					diferenciaPorcentual = 1.1;
				break;
			}
			break;	
	}
	precioFinal = parseInt(tarifaBase*diferenciaPorcentual);
	alert("Su viaje a "+destinoIngresado+" en "+estacionIngresada+"tiene un costo de: $"+precioFinal);

}//FIN DE LA FUNCIÓN