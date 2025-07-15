// Función que muestra una alerta personalizada
function mostrarAlerta() {
  alert("🚀 ¡Gracias por visitar nuestro sitio! ¿En qué podemos ayudarte?");
}

// Validación del formulario
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // Previene el envío si hay errores

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  let valido = true;

  if (nombre.value.trim() === "") {
    nombre.classList.add("is-invalid");
    valido = false;
  } else {
    nombre.classList.remove("is-invalid");
  }

  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoValido.test(correo.value)) {
    correo.classList.add("is-invalid");
    valido = false;
  } else {
    correo.classList.remove("is-invalid");
  }

  if (mensaje.value.trim() === "") {
    mensaje.classList.add("is-invalid");
    valido = false;
  } else {
    mensaje.classList.remove("is-invalid");
  }

  if (valido) {
    alert("✅ Formulario enviado correctamente.");
    this.reset();
  }
});

