/*
2- "super chino" Se pide el ingreso de mercadería de un supermercado ,
 hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/
function mostrar()
{
    let tipoProductoIngresado;
    let nombreProductoIngresado;
    let importeProductoIngresado;
    let procedenciaProductoIngresado;
    let pesoProductoIngresado;
    let nombreComestibleMasPesado;
    let pesoComestibleMasPesado;
    let nombreProductoMasCaro;
    let importeProductoMasCaro;
    let nombreElaboradoMasBarato;
    let importeElaboradoMasBarato;
    let contadorLimpieza=0;
    let contadorComestible=0;
    let contadorOtro=0;
    let contadorTodosLosProductos=0;
    let tipoQueMasAparece;
    let contadorElaborados=0;
    let porcentajeElaborados;
    let contadorPesoLimpieza=0;
    let contadorPesoComestible=0;
    let ContadorPesoOtros=0;
    let promedioPesoLimpieza;
    let promedioPesoComestibles;
    let promedioPesoOtros;
    let continuar=true;

    let flagComestibleMasPesado="Primer comestible ingresado.";
    let flagProductoMasCaro="Primer producto ingresado.";
    let flagElaboradoMasBarato="Primer elaborado ingresado.";


    do
    {
        do
        {
        tipoProductoIngresado=prompt("Ingrese un tipo de producto: [limpieza][comestible][otro]");
        }
        while (tipoProductoIngresado !="limpieza" && tipoProductoIngresado !="comestible" && tipoProductoIngresado != "otro");
        do
        {
            nombreProductoIngresado=prompt("Ingrese el nombre del producto:");
        }
        while (nombreProductoIngresado =="");
        do
        {
            importeProductoIngresado=parseInt(prompt("ingrese el importe del producto: (maximo 1000)"));
        }
        while (isNaN(importeProductoIngresado) || importeProductoIngresado>1000);
        do
        {
            procedenciaProductoIngresado=prompt("Ingrese la procedencia del producto ingresado: [importado][nacional][elaborado]");
        }
        while (procedenciaProductoIngresado !="importado" && procedenciaProductoIngresado !="nacional" && procedenciaProductoIngresado !="elaborado");
        do
        {
            pesoProductoIngresado=parseInt(prompt("ingrese el peso del producto en Kilogramos:"));
        }
        while (isNaN(pesoProductoIngresado) || pesoProductoIngresado > 30);
        if (tipoProductoIngresado=="comestible")
        {
            if (flagComestibleMasPesado=="Primer comestible ingresado.")
            {
                nombreComestibleMasPesado=nombreProductoIngresado;
                pesoComestibleMasPesado=pesoProductoIngresado;
                flagComestibleMasPesado="Despues del primero.";    
            }
            else
            {
                if (pesoProductoIngresado > pesoComestibleMasPesado)
                {
                    nombreComestibleMasPesado=nombreProductoIngresado;
                    pesoComestibleMasPesado=pesoProductoIngresado;    
                }
            }
        }
        if (procedenciaProductoIngresado =="elaborado")
        {
            if (flagElaboradoMasBarato=="Primer elaborado ingresado.")
            {
                nombreElaboradoMasBarato=nombreProductoIngresado;
                importeElaboradoMasBarato=importeProductoIngresado;
                flagElaboradoMasBarato="Despues del primero.";
            }
            else
            {
                if (importeProductoIngresado<importeElaboradoMasBarato)
                {
                    importeElaboradoMasBarato=importeProductoIngresado;
                    nombreElaboradoMasBarato=nombreProductoIngresado;    
                }
            }
            contadorElaborados++;
        }
        if (flagProductoMasCaro=="Primer producto ingresado.")
        {
            nombreProductoMasCaro=nombreProductoIngresado;
            importeProductoMasCaro=importeProductoIngresado;
            flagProductoMasCaro="Despues del primero.";
        }
        else
        {
            if (importeProductoIngresado > importeProductoMasCaro)
            {
                importeProductoMasCaro=importeProductoIngresado;
                nombreProductoMasCaro=nombreProductoIngresado;    
            }
        }
        switch (tipoProductoIngresado)
        {
            case "limpieza":
                contadorLimpieza++;
                contadorPesoLimpieza=contadorPesoLimpieza+pesoProductoIngresado;
                break;
            case "comestible":
                contadorComestible++;
                contadorPesoComestible=contadorPesoComestible+pesoProductoIngresado;
                break;
            case "otro":
                contadorOtro++;
                ContadorPesoOtros=ContadorPesoOtros+pesoProductoIngresado;
                break;
        }
        contadorTodosLosProductos++;
        continuar=confirm("¿Desea agregar otro producto?");
    }
    while(continuar==true);
    if (contadorComestible >= contadorLimpieza && contadorComestible >= contadorOtro)
    {
         tipoQueMasAparece="comestibles";
    }
    else
    {
        if (contadorLimpieza >= contadorComestible && contadorLimpieza >= contadorOtro)
        {
            tipoQueMasAparece="limpieza";
        }
        else
        {
            tipoQueMasAparece="otro";
        }
    }
    if (contadorElaborados >0)
    {
        porcentajeElaborados=(contadorElaborados/contadorTodosLosProductos*100);  
    }
    else
    {
        porcentajeElaborados=0;
    }
    if (contadorLimpieza>0)
    {
        promedioPesoLimpieza=(contadorPesoLimpieza/contadorLimpieza)+"kg";
    }
    else
    {
        promedioPesoLimpieza="NO SE INGRESARON PRODUCTOS DE LIMPIEZA"
    }
    if (contadorComestible>0)
    {
        promedioPesoComestibles=(contadorPesoComestible/contadorComestible)+"kg";
    }
    else
    {
        promedioPesoComestibles="NO SE INGRESARON PRODUCTOS COMESTIBLES"
    }
    if (contadorOtro>0)
    {
        promedioPesoOtros=(ContadorPesoOtros/contadorOtro)+"kg";    
    }
    else
    {
        promedioPesoOtros="NO SE INGRESARON PRODUCTOS DE CATEGORIA OTROS";
    }
    
    alert("El comestible mas pesado es "+nombreComestibleMasPesado+".");
    alert("El mas caro de todos los productos es "+nombreProductoMasCaro+".");
    alert("El mas barato de los productos elaborados es "+nombreElaboradoMasBarato+".");
    alert("El tipo de mercadería que mas aparece es "+tipoQueMasAparece+".");
    alert("El porcentaje de productos elaborados es del "+porcentajeElaborados+"%.");
    alert("El promedio de peso de productos de limpieza es de "+promedioPesoLimpieza+". el de comestibles es "+promedioPesoComestibles+". y el de otros es de "+promedioPesoOtros+".");
}


/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
/*
function mostrar()
{
let nombre;

nombre = prompt("Ingrese su nombre");
txtIdNombre.value = nombre;

}

*/