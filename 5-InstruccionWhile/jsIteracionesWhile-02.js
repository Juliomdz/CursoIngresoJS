/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let contador;
	let numerosAcumulados;

	contador=0;
	numerosAcumulados=11;
	while(contador<10)
	{
		numerosAcumulados--;
		alert("El número es: "+numerosAcumulados);
		contador=contador+1;
	}
}