/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoIngresado;
	let legajoIngresado;
	let nacionalidadIngresada;

	do
	{
		edadIngresada=parseInt(prompt("Ingrese su edad:"));
	}
	while(edadIngresada <18 || edadIngresada >90 || isNaN(edadIngresada));
	do
	{
		sexoIngresado=prompt("Ingrese su sexo[M/F]:");
	}
	while(sexoIngresado !="F" && sexoIngresado !="M");
	if (sexoIngresado =="F")
	{
		sexoIngresado="Femenino.";	
	}
	else if (sexoIngresado =="M")
	{
		sexoIngresado="Masculino";	
	}
	do
	{
		estadoCivilIngresado=parseInt(prompt("Ingrese su estado civil[1] Soltero/a. [2] Casado/a. [3] Divorciado/a. [4] Viudo/a:"));
	}
	while(estadoCivilIngresado !=1 && estadoCivilIngresado !=2 && estadoCivilIngresado !=3 && estadoCivilIngresado !=4);
	if (estadoCivilIngresado ==1)
	{
		estadoCivilIngresado="Soltero/a.";	
	}
	else{
		if (estadoCivilIngresado ==2)
		{
			estadoCivilIngresado="Casado/a.";	
		}
		else{
			if (estadoCivilIngresado ==3)
			{
				estadoCivilIngresado="Divorciado/a.";	
			}
			else if (estadoCivilIngresado ==4)
			{
				estadoCivilIngresado="Viudo/a.";	
			}
		}
	}
	do
	{
		sueldoIngresado=parseInt(prompt("Ingrese su sueldo bruto:"));
	}
	while(sueldoIngresado <8000 || isNaN(sueldoIngresado));
	do
	{
		legajoIngresado=parseInt(prompt("Ingrese su número de legajo de 4 cifras:"));
	}
	while(legajoIngresado <1000 || legajoIngresado >9999 || isNaN(legajoIngresado));
	do
	{
		nacionalidadIngresada=prompt("Ingrese su nacionalidad:[A]Argentino; [E]Extranjero; [N]Nacionalizados.");
	}
	while(nacionalidadIngresada !="A" && nacionalidadIngresada !="E" && nacionalidadIngresada != "N");
	if (nacionalidadIngresada =="A")
	{
		nacionalidadIngresada="Argentino/a.";	
	}
	else
	{
		if (nacionalidadIngresada =="E")
		{
			nacionalidadIngresada="Extranjero/a.";	
		}
		else if (nacionalidadIngresada == "N")
		{
			nacionalidadIngresada="Nacionalizado/a."
		}
	}
	 txtIdEdad.value = edadIngresada;
	 txtIdSexo.value = sexoIngresado;
	 txtIdEstadoCivil.value = estadoCivilIngresado;
	 txtIdSueldo.value = sueldoIngresado;
	 txtIdLegajo.value =  legajoIngresado;
	 txtIdNacionalidad.value = nacionalidadIngresada;
}
