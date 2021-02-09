/*
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad
 (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	 
	let edad;
	let edadParseada;
	
	edad = txtIdEdad.value; //tomo la edad
	edadParseada = parseInt(edad);

	if (isNaN(edad)) {
		// Si no se cumple la condicion...
		alert("[ERROR] La edad ingresada debe ser un número.");
	}
		else{
			if(edad >= 18){
			alert("Usted es mayor de edad.");
	}
				else{
					if(edad < 13){
				alert("Usted es un niño.");
			}
					else{
				alert("Usted es un adolescente.");
			}

		}
		}
	/*	if(edad >= 18){
		alert("Usted es mayor de edad.")};
	if(edad < 13){
		alert("Usted es un niño.")};
	if(edad<=17 && edad>=13){
		alert("Usted es un adolescente.")};
*/	

}

//FIN DE LA FUNCIÓN