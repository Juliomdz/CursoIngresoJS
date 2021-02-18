/*4.	
Enunciado:
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un 
descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o 
“FelipeLamparas” se hace un descuento del 25 % y si es de otra 
marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz"
 el descuento es del 15%, si es “FelipeLamparas” se hace un 
 descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe 
sumar un 10% de ingresos brutos en informar del impuesto con el
 siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto 
 que se pagó.
 */
/*
function CalcularPrecio () 
{
     let cantidadLamparas;
     let marcaLamparas;
     let porcentajeDescuento;
     let precioLamparas;
     let precioFinal;
     let ingresosBrutos;

    cantidadLamparas = parseInt(txtIdCantidad.value);
    marcaLamparas = Marca.value;
    precioLamparas = parseInt(35);
    if(cantidadLamparas >= 6)
    {
         porcentajeDescuento = 50;
    }
    else
    {
        if (cantidadLamparas == 5)
        {
            if(marcaLamparas =="ArgentinaLuz")
            {
        porcentajeDescuento = 40;
            }
            else{ 
        porcentajeDescuento = 30;
            }
        }    
        else if(cantidadLamparas == 4)
        {
            if(marcaLamparas =="ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
            {
                porcentajeDescuento= 25;
            }
            else
            {
                porcentajeDescuento =20;
            }
        }
        else if(cantidadLamparas == 3)
        {
            if(marcaLamparas == "ArgentinaLuz")
            {
                porcentajeDescuento= 15;
            }
            if(marcaLamparas == "FelipeLamparas")
            {
                porcentajeDescuento = 10;
            }
            else if (marcaLamparas !="ArgentinaLuz" && marcaLamparas !="FelipeLamparas")
            {
                porcentajeDescuento = 5;
            }
        }
        else if(cantidadLamparas < 3)
        {
                porcentajeDescuento= 0;
        }
    }
    precioFinal = (precioLamparas-(precioLamparas*(porcentajeDescuento/100)))*cantidadLamparas;
    if(precioFinal > 120)
    {
        ingresosBrutos = (precioFinal*0.10);
        precioFinal = precioFinal+ingresosBrutos;
        alert("Usted pagará $"+ingresosBrutos+" en concepto de ingresos brutos.")
    }
    txtIdprecioDescuento.value = precioFinal;
}
*/

function CalcularPrecio () 
{
     let cantidadLamparas;
     let marcaLamparas;
     let porcentajeDescuento;
     let precioLamparas;
     let precioFinal;
     let ingresosBrutos;

    cantidadLamparas = parseInt(txtIdCantidad.value);
    marcaLamparas = Marca.value;
    precioLamparas = parseInt(35);
    switch (cantidadLamparas)
    {
        case 6:
        case (cantidadLamparas >= 6):
            porcentajeDescuento = 50;
            break;
        case 5:
            switch (marcaLamparas)
             {
                case "ArgentinaLuz":
                    porcentajeDescuento = 40;
                    break;
                default:
                    porcentajeDescuento = 30;
                    break;
            }
            break;
        case 4:
            switch (marcaLamparas)
             {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentajeDescuento= 25;
                    break;
                default:
                    porcentajeDescuento= 20;
                    break;
            }
            break;
        case 3:
            switch (marcaLamparas)
             {
                case "ArgentinaLuz":
                    porcentajeDescuento= 15;
                    break;
                case "FelipeLamparas":
                    porcentajeDescuento= 10;
                    break;
                default:
                    porcentajeDescuento= 5;
                    break;
            }
            break;
        case 2:
        case 1:
            porcentajeDescuento= 0;
            break;
    }
    precioFinal = (precioLamparas-(precioLamparas*(porcentajeDescuento/100)))*cantidadLamparas;
    if(precioFinal > 120)
    {
        ingresosBrutos = (precioFinal*0.10);
        precioFinal = precioFinal+ingresosBrutos;
        alert("Usted pagará $"+ingresosBrutos+" en concepto de ingresos brutos.")
    }
    txtIdprecioDescuento.value = precioFinal;
}