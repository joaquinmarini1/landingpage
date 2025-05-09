console.log("Hello, World!");

var input_nombre = document.getElementById("nombre");
var input_mail = document.getElementById("mail");
var textarea_problema = document.getElementById("problema");
var input_submit = document.getElementById("enviar");
var mensaje = document.getElementById("mensaje"); // Contenedor para el mensaje

input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault(); // Evita el envío del formulario

    var valor_nombre = input_nombre.value.trim();
    var valor_mail = input_mail.value.trim();
    var valor_problema = textarea_problema.value.trim();

    if (!valor_nombre || !valor_mail || !valor_problema) {
        mensaje.textContent = "Por favor, completa todos los campos del formulario.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = `Gracias, ${valor_nombre}, recibimos tu problema!`;
        mensaje.style.color = "#f5a65d";
    }
}