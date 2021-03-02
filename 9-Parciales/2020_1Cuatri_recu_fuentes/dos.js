/*
MENDEZ JULIO - DIVISION G.
ENUNCIADO:
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/
function mostrar()
{
  let tipoProductoIngresado;
  let cantidadProductoIngresado;
  let precioUnitarioIngresado;
  let continuarIngresando=true;
  let contadorArena=0;
  let contadorCal=0;
  let contadorCemento=0;
  let acumuladorArena=0;
  let acumuladorCal=0;
  let acumuladorCemento=0;
  let cantidadProductosTotal=0;
  let precioFinal;
  let tipoMasCaro;
  let precioDelMasCaro;
  let banderaPrimerIngresado=true; //para encontrar el primero hallar el mas caro;
  let productoMasIngresado;

  do
  {
    do
    {
      tipoProductoIngresado=prompt("Ingrese el tipo de producto:[arena][cal][cemento]")
    }
    while(tipoProductoIngresado!="arena" && tipoProductoIngresado!="cal" && tipoProductoIngresado!="cemento");
    do
    {
      cantidadProductoIngresado=parseInt(prompt("Ingrese la cantidad adquirida de dicho producto:"));
    }
    while(cantidadProductoIngresado<=0);
    do
    {
      precioUnitarioIngresado=parseInt(prompt("Ingrese el precio unitario por bolsa:"));
    }
    while(precioUnitarioIngresado<=0);
    switch (tipoProductoIngresado)
    {
      case "arena":
        acumuladorArena=acumuladorArena+cantidadProductoIngresado*precioUnitarioIngresado;
        contadorArena=contadorArena+cantidadProductoIngresado;
        break;
      case "cal":
        acumuladorCal=acumuladorCal+cantidadProductoIngresado*precioUnitarioIngresado;
        contadorCal=contadorCal+cantidadProductoIngresado;
        break;
      case "cemento":
        acumuladorCemento=acumuladorCemento+cantidadProductoIngresado*precioUnitarioIngresado;
        contadorCemento=contadorCemento+cantidadProductoIngresado;
        break;
    }
    if (banderaPrimerIngresado==true)
    {
      tipoMasCaro=tipoProductoIngresado;
      precioDelMasCaro=precioUnitarioIngresado;
      banderaPrimerIngresado=false;
    }
    else if (precioUnitarioIngresado>precioDelMasCaro)
    {
      precioDelMasCaro=precioUnitarioIngresado;
      tipoMasCaro=tipoProductoIngresado;
    }
  cantidadProductosTotal=cantidadProductosTotal+cantidadProductoIngresado;
  continuarIngresando=confirm("¿Desea ingresar mas productos?");
  }
  while(continuarIngresando==true);

  precioFinal=acumuladorArena+acumuladorCal+acumuladorCemento;
  alert("El precio total bruto de su compra es de"+precioFinal+".");
  if (cantidadProductosTotal>30)
  {
    precioFinal=precioFinal*0.75;
    alert("Debido a su compra de mas de 30 unidades, usted es beneficiario de un 25% de descuento, dando un total a pagar final de: "+precioFinal+".");
  }
  else if (cantidadProductosTotal>10)
  {
   precioFinal=precioFinal*0.85; 
   alert("Debido a su compra de mas de 10 unidades, usted es beneficiario de un 15% de descuento, dando un total a pagar final de: "+precioFinal+".");
  }
  if (contadorCemento >= contadorCal && contadorCemento >= contadorArena)
  {
    productoMasIngresado="Cemento";
  }
  else
  {
    if (contadorCal >= contadorCemento && contadorCal >= contadorArena)
    {
      productoMasIngresado="Cal";  
    }
    else if (contadorArena>= contadorCemento && contadorArena>=contadorCal)
    {
    productoMasIngresado="Arena";
    }
  }
  alert("El tipo de producto mas comprado es: "+productoMasIngresado+".");
  alert("El tipo de producto mas caro es "+tipoMasCaro+".");
}
