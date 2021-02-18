/*
MÉNDEZ JULIO - DIVISION G
3-con if
una agencia de viajes debe sacar las tarifas de los viajes,
 se cobra $15.000 por cada estadia como base, se pide el ingreso
  de una estacion del año y localidad para vacacionar para poder 
  calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba
 tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba
 tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas
 tiene un aumento del 10% Mar del plata tiene un aumento del 10% y
  Cordoba tiene el precio sin descuento*/
function mostrar()
{
	let tarifaBase;
	let estacion;
	let localidad;
	let diferenciaPorcentual;
	let precioFinal;

	tarifaBase = 1500;
	estacion = prompt("ingrese la estación en que viajará:");
	localidad = prompt("Ingrese su localidad de destino:");
	if (estacion == "Otoño" || estacion == "Primavera")
	{
		if(localidad == "Bariloche" || localidad == "Cataratas" || localidad == "Mar del plata")
		{
			diferenciaPorcentual = 1.1;
		}else
		{
			if(localidad == "Cordoba")
				{
					diferenciaPorcentual = 1.0;
				}
		}
	}else
		{
		if(estacion == "Invierno")
		{
			if(localidad == "Bariloche")
			{
				diferenciaPorcentual = 1.2;
			}else
			{
				if(localidad == "Cataratas" || localidad == "Cordoba")
				{
					diferenciaPorcentual = 0.9;
				}
				if(localidad == "Mar del plata")
				{
					diferenciaPorcentual = 0.8;
				}
			}
		}
		if(estacion == "Verano")
		{
			if(localidad == "Cordoba" || localidad == "Cataratas")
			{
				diferenciaPorcentual = 1.1;
			}else
				{
				if(localidad == "Mar del plata")
				{
					diferenciaPorcentual = 1.2;	
				}
				if(localidad == "Bariloche")
				{
					diferenciaPorcentual = 0.9;
				}
				}
		}
		}
		precioFinal = parseInt(tarifaBase*diferenciaPorcentual);
		alert("El precio final de su viaje será de: $"+precioFinal);
}