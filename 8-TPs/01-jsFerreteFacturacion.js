/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let numero1;
    let numero2;
    let numero3;
	let resultado;
	
	numero1 = parseInt(txtIdPrecioUno.value);
    numero2 = parseInt(txtIdPrecioDos.value);
    numero3 = parseInt(txtIdPrecioTres.value);
	resultado = numero1+numero2+numero3;

	alert("el resultado es "+resultado+".");
}
function Promedio () 
{
    let numero1;
    let numero2;
    let numero3;
	let resultado;
	
	numero1 = parseInt(txtIdPrecioUno.value);
    numero2 = parseInt(txtIdPrecioDos.value);
    numero3 = parseInt(txtIdPrecioTres.value);
	resultado = (numero1+numero2+numero3)/3;

	alert("el resultado es "+resultado+".");
}
function PrecioFinal () 
{
    let numero1;
    let numero2;
    let numero3;
	let resultado;
	
	numero1 = parseInt(txtIdPrecioUno.value);
    numero2 = parseInt(txtIdPrecioDos.value);
    numero3 = parseInt(txtIdPrecioTres.value);
	resultado = (numero1+numero2+numero3)*1.21;

	alert("el resultado es "+resultado+".");	
}