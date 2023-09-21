let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivina() {
    intentos++;
    let numeroIngresado = document.getElementById("numero").value;

    if (numeroIngresado == numeroAleatorio) {
        alert("¡Acertaste! El número era " + numeroAleatorio + ". Tomó " + intentos + " intentos.");
    } else if (numeroIngresado < numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "El número ingresado es más alto.";
    } else {
        document.getElementById("resultado").innerHTML = "El número ingresado es más bajo.";
    }
}
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("adivina").addEventListener("click", adivina);
});