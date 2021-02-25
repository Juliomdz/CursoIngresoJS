/*
Enunciado:
al presionar el botón se pedira, a traves de prompt, y numeros
que seran guardados en un vector y luego seran mostrados mediante
document.write(). mostrar ademas la sumatoria de todos los numeros.
*/
function mostrar()
{
	let arrayNumerosIngresados=[];
	var sumatoriaTotal=0;

	for (let i = 0; i <5; i++)
	{
		arrayNumerosIngresados.push(parseInt(prompt("Ingrese un numero")))
		sumatoriaTotal=sumatoriaTotal+arrayNumerosIngresados[i];
	}
	for(var i=0; i<5; i++)
	{
		document.write("Posicion "+i+"-->"+arrayNumerosIngresados[i]+"<br>");
	}
	document.write("<h1> La suma de todos los numeros es: "+sumatoriaTotal+"</h1>")
}//FIN DE LA FUNCIÓN
/*
function mostrar()
{
	var miArray = new Array();
	var acum=0;
	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
		acum+=miArray[i];
	}
	for(var i=0; i<5; i++)
	{
		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}

	document.write("<h1> La suma de todos los numeros es: "+acum+"</h1>")
}//FIN DE LA FUNCIÓN
*/