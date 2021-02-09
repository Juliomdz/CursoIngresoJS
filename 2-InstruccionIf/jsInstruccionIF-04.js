/*
Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente,
 edad entre 13 y 17 años (inclusive) .
*/
function mostrar()
{
	 
	let edad;
	let edadParseada;
	
	edad = txtIdEdad.value; //tomo la edad
	edadParseada = parseInt(edad);


	if(edad<=17 && edad>=13){
	alert("Usted es un adolescente.")};
	

}//FIN DE LA FUNCIÓN