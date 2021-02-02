/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resto;
	
	dividendo = parseInt(txtIdNumeroDividendo.value);
	divisor = parseInt(txtIdNumeroDivisor.value);
	resto = dividendo%divisor;
		alert("el resultado es "+resto+".");
}
