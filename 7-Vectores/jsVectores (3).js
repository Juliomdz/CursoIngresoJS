/*
Enunciado:
al presionar el botón se pedira, a traves de prompt, y numeros
que seran guardados en un vector y luego serán mostrados mediante
document.write().
*/
function mostrar()
{
	let arrayNumerosIngresados=[];

	for (let i = 0; i <5; i++)
	{
		arrayNumerosIngresados.push(parseInt(prompt("Ingrese un numero")))
	}
	for(var i=0; i<5; i++)
	{
		document.write("Posicion "+i+"-->"+arrayNumerosIngresados[i]+"<br>");
	}
}//FIN DE LA FUNCIÓN
/*
function mostrar()
{

	var miArray = new Array();

	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}
}//FIN DE LA FUNCIÓN
*/