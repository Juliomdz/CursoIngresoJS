/*
Enunciado:
Al ingresar una edad que sea igual a 15, 
mostrar el mensaje "niña bonita".

*/




function mostrar()
{
	let edad;
	let edadParseada;
	
	edad = txtIdEdad.value; //tomo la edad
	edadParseada = parseInt(edad);

	if(edad == 15){
	alert("Niña bonita.");
	}
	if(edad != 15){
	alert("Niña feita.")};
	

}//FIN DE LA FUNCIÓN