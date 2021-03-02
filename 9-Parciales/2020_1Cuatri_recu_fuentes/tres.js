/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
function mostrar()
{
	let nombreIngresado;
	let nacionalidadIngresada;
	let edadIngresada;
	let sexoIngresado;
	let temperaturaIngresada;
	let mayoresDeEdadSolteros=0;
	let contadormujeresSolterasOViudas=0;
	let contadorViejosConFiebre=0;
	let promedioEdadMujeresCasadas;
	let contadorMujeresCasadas=0;
	let acumuladorEdadMujeresCasadas=0;
	let temperaturaMasAlta;
	let nacionalidadTemperaturaMasAlta;
	let continuarIngresandoPasajeros=true;

	do
	{
		do
		{
			nombreIngresado=prompt("Ingrese el nombre del pasajero:");
		}
		while (isNaN(nombreIngresado)==false || nombreIngresado=="");
		do
		{
			nacionalidadIngresada=prompt("Ingrese la nacionalidad del pasajero:");
		}
		while (isNaN(nacionalidadIngresada)==false || nacionalidadIngresada=="");
		do
		{
			edadIngresada=parseInt(prompt("Ingrese la edad del pasajero:"));
		}
		while (isNaN(edadIngresada));
		do
		{
			sexoIngresado=prompt("Ingrese el sexo del pasajero:[f] o [m]");
		}
		while (sexoIngresado!="f" && sexoIngresado!="m");

		continuarIngresandoPasajeros=confirm("¿Desea continuar ingresando pasajeros?");
	}
	while (continuarIngresandoPasajeros==true);



	alert("tres");
}
