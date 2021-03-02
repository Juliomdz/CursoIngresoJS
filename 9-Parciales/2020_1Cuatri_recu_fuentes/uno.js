/*
MÉNDEZ JULIO - DIVISION G.
Enunciado:
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
	let tipoProductoIngresado;
	let precioProductoIngresado;
	let cantidadUnidadesIngresadas;
	let marcaProductoIngresado;
	let fabricanteProductoIngresado;
	let nombreJabonMasCaro;
	let precioJabonMasCaro;
	let cantidadJabonMasCaro;
	let fabricanteJabonMasCaro;
	let banderaPrimerJabon=true; //para hallar el primero y el mas caro.
	let productoConMasUnidades;
	let promedioCompra;
	let contadorBarbijo=0;
	let contadorJabon=0;
	let contadorAlcohol=0;
	let totalUnidades=0;

	for (let i = 0; i < 5; i++)
	{
		do
		{
			tipoProductoIngresado=prompt("Ingrese el tipo de producto: [barbijo][jabón][alcohol]");
		}
		while (tipoProductoIngresado!="barbijo" && tipoProductoIngresado !="jabón" && tipoProductoIngresado !="alcohol");	
		do
		{
			precioProductoIngresado=parseInt(prompt("Ingrese el precio del producto:[entre $100 y $300]"));
		}
		while (precioProductoIngresado<100 || precioProductoIngresado>300);
		do
		{
			cantidadUnidadesIngresadas=parseInt(prompt("Ingrese la cantidad de unidades:[Maximo 1000]"));
		}
		while (cantidadUnidadesIngresadas > 1000 || cantidadUnidadesIngresadas < 0);
		do
		{
			marcaProductoIngresado=prompt("Ingrese la marca del producto Ingresado:");
		}
		while(isNaN(marcaProductoIngresado)==false || marcaProductoIngresado=="");
		do
		{
			fabricanteProductoIngresado=prompt("Ingrese el fabricante del producto ingresado:");
		}
		while(isNaN(fabricanteProductoIngresado)==false || fabricanteProductoIngresado=="");
		switch (tipoProductoIngresado)
		{
			case "barbijo":
				contadorBarbijo=contadorBarbijo+cantidadUnidadesIngresadas;
				break;
			case "jabón":
				contadorJabon=contadorJabon+cantidadUnidadesIngresadas;
				break;
			case "alcohol":
				contadorAlcohol=contadorAlcohol+cantidadUnidadesIngresadas;
				break;
		}
		if (tipoProductoIngresado=="jabón" && banderaPrimerJabon==true)
		{
			nombreJabonMasCaro=marcaProductoIngresado;
			precioJabonMasCaro=precioProductoIngresado;
			fabricanteJabonMasCaro=fabricanteProductoIngresado;
			cantidadJabonMasCaro=cantidadUnidadesIngresadas;
			banderaPrimerJabon=false;
		}
		else if (tipoProductoIngresado == "jabón" && precioProductoIngresado> precioJabonMasCaro)
		{
			nombreJabonMasCaro=marcaProductoIngresado;
			precioJabonMasCaro=precioProductoIngresado;
			fabricanteJabonMasCaro=fabricanteProductoIngresado;
			cantidadJabonMasCaro=cantidadUnidadesIngresadas;
		}
		totalUnidades=totalUnidades+cantidadUnidadesIngresadas;
	}
	totalUnidades=contadorAlcohol+contadorBarbijo+contadorJabon;
	if (contadorBarbijo >= contadorJabon && contadorBarbijo >= contadorAlcohol)
	{
		productoConMasUnidades="Barbijos";
		promedioCompra=contadorBarbijo/totalUnidades;
	}
	else
	{
		if (contadorJabon>=contadorBarbijo && contadorJabon>=contadorAlcohol)
		{
			productoConMasUnidades="Jabón";
			promedioCompra=contadorJabon/totalUnidades;
		}
		else if (contadorAlcohol >= contadorBarbijo && contadorAlcohol >= contadorJabon)
		{
			productoConMasUnidades="Alcohol";
			promedioCompra=contadorAlcohol/totalUnidades;	
		}
	}
	if (contadorJabon==0)
	{
	alert("NO SE COMPRARON JABONES.");
	}
	else if (contadorJabon>0)
	{
		alert("El mas caro de los jabones es "+nombreJabonMasCaro+", del cual se compraron "+cantidadJabonMasCaro+" unidades, y su fabricante es "+fabricanteJabonMasCaro+".");	
	}
	alert("El tipo de producto mas comprados en total es "+productoConMasUnidades+", y el promedio de dicho item adquirido por cada compra es "+promedioCompra+".");
	if (contadorBarbijo==0)
	{
		alert("NO SE COMPRARON BARBIJOS.");
	}
	else if (contadorBarbijo>0)
	{
		alert("Se compraron "+contadorBarbijo+" unidades de barbijos en total.");
	}
}
