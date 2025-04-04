document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.querySelector('.dropdown-button');
    const dropdownContainer = document.querySelector('.dropdown-container');

    dropdownBtn.addEventListener('click', () => {
        dropdownContainer.classList.toggle('active');
    });
});

function redirigir(pagina) {
    window.location.href = pagina;
}
