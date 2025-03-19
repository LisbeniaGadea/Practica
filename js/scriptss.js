function saludar() {
    alert("Registrese");
}
function saludar2() {
    alert("Registro enviado");
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mi_boton").addEventListener("click", function() {
        saludar();
        saludar2();
    });
});