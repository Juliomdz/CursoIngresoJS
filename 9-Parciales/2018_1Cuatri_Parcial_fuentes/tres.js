function mostrar()
{
    let PrecioFinal
let Precio
let Descuento

Precio=parseInt(prompt("Ingrese el precio:"))
Descuento=parseInt(prompt("ingrese el porcentaje de descuento:"))

PrecioFinal=(((100-Descuento)/100))*Precio
elPrecioFinal.value=PrecioFinal

}
