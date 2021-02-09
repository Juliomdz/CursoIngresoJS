/*
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto
 a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	 
	let edad;
	let edadParseada;
	
	edad = txtIdEdad.value; //tomo la edad
		edadParseada = parseInt(edad);
	if(edad >= 18 && estadoCivil.selectedIndex == 0 )
	 {
		alert("Es soltero y no es menor.")};

	

}//FIN DE LA FUNCIÓN