/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	numeroMaximo=0;
	numeroMinimo=9999;
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado=parseInt(prompt("Ingrese Un Numero:"));
		if (numeroIngresado>numeroMaximo)
		 {
			numeroMaximo=numeroIngresado;
		}
		if (numeroIngresado<numeroMinimo)
		{
		numeroMinimo = numeroIngresado;
		}
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN