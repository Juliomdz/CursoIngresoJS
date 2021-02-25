/*
Enunciado:
al presionar el botón mostrará 10 números
que estaran contenidos en un vector.
*/
function mostrar()
{
	let arrayNumero=[5,74,8,94,5,0,80,789,5,7];

document.write("El contenido del array es: <br>");
	for(let i=0; i<10; i++)
	{
		document.write("Posicion "+i+"-->"+arrayNumero[i]+"<br>");
	}
/*
function mostrar()
{
	let miArray = new Array();

	miArray[0]=5;
	miArray[1]=74;
	miArray[2]=8;
	miArray[3]=94;
	miArray[4]=5;
	miArray[5]=0;
	miArray[6]=80;
	miArray[7]=789;
	miArray[8]=5;
	miArray[9]=7;

document.write("El contenido del vector es: <br>");

	for(var i=0; i<10; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}
*/




}//FIN DE LA FUNCIÓN