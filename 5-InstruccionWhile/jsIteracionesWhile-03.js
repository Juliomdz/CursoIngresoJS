/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada=prompt("Ingrese la clave:")
	numerosAcumulados=11;
	while(claveIngresada!="utn750")
	{
		alert("LA CLAVE INGRESADA ES INCORRECTA.")
		claveIngresada=prompt("Ingrese la clave:")
	}
}