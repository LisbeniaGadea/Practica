document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mi_boton").addEventListener("click", function() {
        mostrar_mensaje();
    });

    document.getElementById("mi_boton2").addEventListener("click", function() {
        cambiar_color();
    });
});

function mostrar_mensaje() {
    //declaracion de variables
    var dato1;
    var dato2;

    //Asignacion de id a las variables
    dato1 = document.getElementById("input1").value;
    dato2 = document.getElementById("input2").value;

    if (dato1.trim() ===""|| dato2.trim() ==="" )
    {
     alert("Por_favor_llene_sus_datos");
    }
    else
    {
        //construir mensaje
        var mensaje = "Los datos son" +" " + dato1 +" "+ dato2;

        //Mostrar mensaje
        document.getElementById("resultado").innerText = mensaje;
    }
}
function cambiar_color()
{
    var elemento = document.getElementById("contenedor");

    if (document.body.style.backgroundColor === "black")
        {
            document.body.style.backgroundColor = "white";
            elemento.style.width = "200px";
            elemento.style.heigth = "200px";
            elemento.style.backgroundColor="red";
        }
    else
    {
        document.body.style.backgroundColor = "black";
        elemento.style.width = "200px";
        elemento.style.heigth = "200px";
        elemento.style.backgroundColor="blue";
    }
    
}
