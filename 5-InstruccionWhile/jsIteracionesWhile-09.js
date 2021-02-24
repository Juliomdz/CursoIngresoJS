/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	numeroMaximo;
	numeroMinimo;
	respuesta=true;
	flag="Primer número."
	
	do
	{
		numeroIngresado=parseInt(prompt("Ingrese Un Numero:"));
		if (flag=="Primer número.")
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			flag="ya ta.";
		}
		else
		{
			if (numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			else
			{
				if (numeroIngresado<numeroMinimo)
				{
				numeroMinimo = numeroIngresado;
				}
			}
		}
		respuesta=confirm("desea continuar?");
	}
	while(respuesta);
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN