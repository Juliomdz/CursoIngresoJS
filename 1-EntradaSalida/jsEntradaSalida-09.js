/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

let importe
let resultado

importe = parseInt(txtIdSueldo.value);

resultado =(importe*(1.1))

txtIdResultado.value = parseInt(resultado);
}
