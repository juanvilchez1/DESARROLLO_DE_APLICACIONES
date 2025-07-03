const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const submitBtn = document.getElementById("submitBtn");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmPassword = document.getElementById("errorConfirmPassword");
const errorEdad = document.getElementById("errorEdad");

function validarFormulario() {
  let valid = true;

  // Validar nombre
  if (nombre.value.trim().length < 3) {
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
    valid = false;
  } else {
    errorNombre.textContent = "";
  }

  // Validar correo
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(correo.value)) {
    errorCorreo.textContent = "Correo no válido.";
    valid = false;
  } else {
    errorCorreo.textContent = "";
  }

  // Validar contraseña
  const passRegex = /^(?=.*[0-9])(?=.*[\W_]).{8,}$/;
  if (!passRegex.test(password.value)) {
    errorPassword.textContent = "Debe tener al menos 8 caracteres, un número y un símbolo.";
    valid = false;
  } else {
    errorPassword.textContent = "";
  }

  // Validar confirmación de contraseña
  if (confirmPassword.value !== password.value) {
    errorConfirmPassword.textContent = "Las contraseñas no coinciden.";
    valid = false;
  } else {
    errorConfirmPassword.textContent = "";
  }

  // Validar edad
  if (parseInt(edad.value) < 18) {
    errorEdad.textContent = "Debes ser mayor de 18 años.";
    valid = false;
  } else {
    errorEdad.textContent = "";
  }

  submitBtn.disabled = !valid;
}

// Eventos dinámicos
[nombre, correo, password, confirmPassword, edad].forEach(input => {
  input.addEventListener("input", validarFormulario);
});
