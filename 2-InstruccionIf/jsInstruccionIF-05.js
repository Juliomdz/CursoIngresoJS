/*
Enunciado:
Al ingresar una edad 
solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	 
	let edad;
	let edadParseada;
	
	edad = txtIdEdad.value; //tomo la edad
	edadParseada = parseInt(edad);


	if(edad>=17 || edad<=13){
	alert("Usted NO es un adolescente.")};
	

}//FIN DE LA FUNCIÓN