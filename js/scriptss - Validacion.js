document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorName = document.getElementById("errorName");
    const errorEmail = document.getElementById("errorEmail");
    const errorPassword = document.getElementById("errorPassword");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        let valid = true;

        if (nameInput.value.trim() === "") {
            errorName.textContent = "Por favor, ingresa tu nombre completo.";
            valid = false;
        } else {
            errorName.textContent = "";
        }

        if (emailInput.value.trim() === "") {
            errorEmail.textContent = "Por favor, ingresa tu correo electrónico.";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            errorEmail.textContent = "Por favor, ingresa un correo válido.";
            valid = false;
        } else {
            errorEmail.textContent = "";
        }

        if (passwordInput.value.trim() === "") {
            errorPassword.textContent = "Por favor, ingresa una contraseña.";
            valid = false;
        } else if (passwordInput.value.length < 6) {
            errorPassword.textContent = "La contraseña debe tener al menos 6 caracteres.";
            valid = false;
        } else {
            errorPassword.textContent = "";
        }

        if (valid) {
            alert("Información enviada");
            form.reset(); 
        }
    });
});
