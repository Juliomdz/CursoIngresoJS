/*
Enunciado:
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula
 (Mercurio y Venus están antes que la tierra).
*/

function mostrar()
{
    let planeta;

    planeta = prompt("Ingrese un planeta");

    switch (planeta) {
        case "mercurio":
        case "venus":
            alert("Acá hace mas calor.");
            break;
        case "tierra":
            alert("Acá vivimos.")
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("Acá hace mas frío.")
            break; 
        default:
                alert("Este no es un planeta valido.")
                break;
    }
}
