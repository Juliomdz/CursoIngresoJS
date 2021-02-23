/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadPositivos=0;
	let cantidadNegativos=0;
	let cantidadCeros=0;
	let numerosPares=0;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPositivosNegativos;

	respuesta="si";
	while(respuesta == "si")
	{
		numeroIngresado= parseInt(prompt("Ingrese un numero:"));
		if (numeroIngresado == 0)
		{
		 cantidadCeros++;	
		}
		else
		{
			if (numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos+numeroIngresado;
				cantidadPositivos++;
				if (numeroIngresado%2 == 0)
				 {
					numerosPares++;
				}
			}
			else
			{
				sumaNegativos = sumaNegativos+numeroIngresado;
				cantidadNegativos++;
			}
		}
		respuesta=prompt("desea continuar?");
	}//fin del while
	promedioPositivos = sumaPositivos/cantidadPositivos;
	promedioNegativos = sumaNegativos/cantidadNegativos;
	diferenciaPositivosNegativos = sumaPositivos+sumaNegativos;
	document.write("la suma de negativos es :"+sumaNegativos+". La suma de positivos es :"+sumaPositivos+". La cantidad de positivos es de: "+cantidadPositivos+". La cantidad de negativos es de: "+cantidadNegativos+". La cantidad de ceros es de: "+cantidadCeros+". La cantidad de numeros pares es de: "+numerosPares+". El promedio de positivos es: "+promedioPositivos+". El promedio de negativos es: "+promedioNegativos+". Y la diferencia de positivos y negativos es de: "+diferenciaPositivosNegativos+".");
}//FIN DE LA FUNCIÓN

