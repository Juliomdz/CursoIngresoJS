/*
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	//tomo el mes
	var horaDelDia;
	
	horaDelDia = txtIdHora.value;
	if(parseInt(horaDelDia) < 24)
	{
		switch (horaDelDia)
		{
			case "7":
				alert("Es de mañana.");
				break;
			case "8":
				alert("Es de mañana.");
				break;
			case "9":
				alert("Es de mañana.");
				break;
			case "10":
				alert("Es de mañana.");
				break;
			case "11":
				alert("Es de mañana.");
				break;
			default:
				alert("no es de mañana.");
				break;	
		}
	}
	else
	{
		alert("El numero ingresado NO es un horario valido.")
	}
}//FIN DE LA FUNCIÓN