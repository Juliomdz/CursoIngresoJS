/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
/*
function mostrar()
{
	let numeroIngresado;
	let contador;
	let numerosAcumulados;

	contador=0;
	numeroIngresado=0;
	numerosAcumulados=0;
	while(contador<5)
	{
		numeroIngresado=parseInt(prompt("ingrese un numero:"));
		numerosAcumulados=numerosAcumulados+numeroIngresado;
		contador=contador+1;
	}
	alert("La sumatoria de todos los numeros ingresados es: "+numerosAcumulados+".");
}

*/
/*
function mostrar()
{
	alert("Esto funcina de maravilla");
}
*/
function mostrar()
{
	let arrayNumeros = [0,1,2,2,3,4]; //arrayNumeros.push(dato)
	let arrayOrden = ["primer","segundo","tercer","cuarto","quinto"];

	for (let i = 0; i < 5; i++)
	{
		arrayNumeros[i]=parseInt(prompt("Ingrese un numero"));
	}
	for (let i = 0; i < 5; i++)
	alert("el "+arrayOrden[i]+" numero es "+arrayNumeros[i]);
}

//ACTUALIZACION DE PC