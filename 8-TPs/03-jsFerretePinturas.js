/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let tempFarenheit;
    let tempConvertidaCentigrados;

    tempFarenheit = parseInt(txtIdTemperatura.value);
    tempConvertidaCentigrados = (tempFarenheit-32)/1.8;
    
    alert("La temperatura es de "+tempConvertidaCentigrados+"Cº.");


}

function CentigradosFahrenheit () 
{
    let tempCentigrados;
    let tempConvertidaFarenheit;
    
    tempCentigrados = parseInt(txtIdTemperatura.value);
    tempConvertidaFarenheit = (tempCentigrados*1.8)+32;

    alert("La temperatura es de "+tempConvertidaFarenheit+"Fº.");
}
