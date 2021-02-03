/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambreRectangulo;
    
    largo=parseInt(txtIdLargo.value);
    ancho=parseInt(txtIdAncho.value);
    alambreRectangulo=((ancho*2)+(2*largo))*3;
    alert("La cantidad de alambre necesaria es de "+alambreRectangulo+" metros.");
    
}
function Circulo () 
{
    let radio;
    let alambreCirculo;
    
    radio=parseInt(txtIdRadio.value);
    alambreCirculo=(2*Math.PI*radio)*3;
    alert("La cantidad de alambre necesaria es de "+alambreCirculo+" metros.");	
}
function Materiales () 
{
    let largo;
    let ancho;
    let areaRectangulo;
    let cementoRequerido;
    let calRequerida;

    largo=parseInt(txtIdLargo.value);
    ancho=parseInt(txtIdAncho.value);
    areaRectangulo=(ancho*largo);
    calRequerida=areaRectangulo*3;
    cementoRequerido=areaRectangulo*2;

    alert("La cantidad de cemento requerida es de "+cementoRequerido+" bolsas, y la cantidad de cal requerida es de "+calRequerida+  " bolsas.");

}