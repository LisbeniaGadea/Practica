document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miboton2").addEventListener("click", function() {
        let contenedor = document.getElementById("contenedor");
        contenedor.classList.toggle("animated"); 
    });
});