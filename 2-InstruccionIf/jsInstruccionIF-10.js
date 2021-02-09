/*
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/




function mostrar()
{
	let notaRandom;
	
	notaRandom = Math.floor(Math.random() * 10) + 1;
	if(notaRandom >= 9){
		alert("EXCELENTE: "+notaRandom+".")
	}if(notaRandom >=4 && notaRandom <9){
		alert("APROBO: "+notaRandom+".")
	}if(notaRandom <= 3) {
		alert("Vamos, la proxima se puede: "+notaRandom+".")};
	
	

}//FIN DE LA FUNCIÓN