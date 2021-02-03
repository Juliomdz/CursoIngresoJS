function mostrar()
{
    let precioFinal
let precio
let descuento

precio=parseInt(prompt("Ingrese el precio:"))
descuento=parseInt(prompt("ingrese el porcentaje de descuento:"))

precioFinal=(((100-descuento)/100))*precio
elPrecioFinal.value=precioFinal

}
