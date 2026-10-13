
const formulario = document.getElementById("formularioCorreo");
const notificacion = document.getElementById("notificacion");

// Inicializar EmailJS con tu clave pública
emailjs.init({
    publicKey: "PY4P79sGVXyBkRxtz"
});

// Escuchar el envío del formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    notificacion.textContent = "Enviando correo...";
    notificacion.style.color = "#2563eb";

    // Preparar los datos del formulario
    const datosCorreo = {
        name: document.getElementById("nombre").value.trim(),
        email: document.getElementById("email").value.trim(),
        asunto: document.getElementById("asunto").value.trim(),
        message: document.getElementById("mensaje").value.trim()
    };


    emailjs.send(
        "service_8ob2ef6",
        "template_soxjl4i",
        datosCorreo
    )
    .then(function(respuesta) {
        notificacion.textContent =
            "¡Correo enviado correctamente!";
        notificacion.style.color = "green";

        formulario.reset();

        console.log("Correo enviado:", respuesta);
    })
    .catch(function(error) {
        notificacion.textContent =
            "No se pudo enviar el correo. Inténtalo nuevamente.";
        notificacion.style.color = "red";

        console.error("Error al enviar:", error);
    });
});
