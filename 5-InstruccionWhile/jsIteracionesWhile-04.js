/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado=11;
	while (numeroIngresado<0 || numeroIngresado>10)
	 {
		numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
	}
	txtIdNumero.value = numeroIngresado;
}//FIN DE LA FUNCIÓN