/*
Enunciado:
Al ingresar una edad debemos informar
 si la persona es mayor de edad, sino informar que es un menor de edad.
*/
function mostrar()
{
	 
	let edad;
	let edadParseada;
	
	edad = txtIdEdad.value; //tomo la edad
	edadParseada = parseInt(edad);

	if(edad >= 18){
	alert("Usted es mayor de edad.");
	}
	if(edad < 18){
	alert("Usted es menor de edad.")};
	

}//FIN DE LA FUNCIÓN