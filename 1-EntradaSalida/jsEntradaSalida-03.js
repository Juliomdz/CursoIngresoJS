/*
Enunciado:
Pedir N números guardarlos en un array; luego calcular MAX MIN y PROM.
*/
function mostrar()
{
	let cantidadNumerosAIngresar;
	let arrayNumerosIngresados=[];
	let minimoIngresado;
	let maximoIngresado;
	let acumuladorNumeros=0;
	let promedio;

	do
	{
		cantidadNumerosAIngresar=parseInt(prompt("¿Cuantos numeros va a ingresar?"));	
	}
	while (isNaN(cantidadNumerosAIngresar));
	for (let i = 0; i < cantidadNumerosAIngresar; i++)
	{
		arrayNumerosIngresados.push(parseInt(prompt("Ingrese un numero:")));		
		acumuladorNumeros=acumuladorNumeros+arrayNumerosIngresados[i];
		if (i==0)
		{
			minimoIngresado = arrayNumerosIngresados[i];
			maximoIngresado = arrayNumerosIngresados[i];	
		}
		else
		{ 
			if (arrayNumerosIngresados[i]>maximoIngresado)
			{
				maximoIngresado=arrayNumerosIngresados[i];
			}
			else if (arrayNumerosIngresados[i]<minimoIngresado)
			{
				minimoIngresado=arrayNumerosIngresados[i];
			}
		}
	}/*
	for (let i = 0; i < cantidadNumerosAIngresar; i++)
	{
		alert("se ingresó "+arrayNumerosIngresados[i]);
	}*/
	promedio=acumuladorNumeros/cantidadNumerosAIngresar;
	alert("El promedio de numeros es de: "+promedio+".");
	alert("El maximo ingresado es:"+maximoIngresado+".");
	alert("El minimo ingresado es:"+minimoIngresado+".");
}
/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
/*
function mostrar()
{
	let nombre;
	nombre=txtIdNombre.value;
	alert("El nombre ingresado es: "+nombre);
}
*/

