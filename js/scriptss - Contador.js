let contador = 0;
function incrementarContador() {
    contador++;
    actualizarContador();
}
function reiniciarContador() {
    contador = 0;
    actualizarContador();
}
function actualizarContador() {
    document.getElementById('contador').innerText = contador;
}