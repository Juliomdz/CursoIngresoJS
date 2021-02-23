/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");
	while (sexoIngresado !="f" && sexoIngresado !="m")
	 {
		alert("respuesta invalida.")
		sexoIngresado = prompt("ingrese f ó m .");
	}
	if (sexoIngresado=="m")
	{
		txtIdSexo.value="Masculino.";	
	}
	else
	{
		if (sexoIngresado=="f")
	{
		txtIdSexo.value="Femenino.";
	}
	}
}//FIN DE LA FUNCIÓN