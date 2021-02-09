/*
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto
 a "Soltero", mostrar el siguiente mensaje:
  'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	 
	let edad;
	let edadParseada;
	
	edad = txtIdEdad.value; //tomo la edad
		edadParseada = parseInt(edad);
	if(edad < 18 && estadoCivil.selectedIndex != 0 )
	 {
		alert("Usted es muy pequeño para NO ser soltero.")};

	

}//FIN DE LA FUNCIÓN