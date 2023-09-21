function obtenerOpcionComputadora() {
    const opciones = ["piedra", "papel", "tijeras"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
}

function determinaResultado(opcionJugador, opcionUsuario) {
    if (opcionJugador === opcionUsuario) {
        return "Hubo empate";
    } else if (
        (opcionJugador === "piedra" && opcionUsuario === "tijeras") ||
        (opcionJugador === "papel" && opcionUsuario === "piedra") ||
        (opcionJugador === "tijeras" && opcionUsuario === "papel")
    ) {
        return "Ganaste";
    } else {
        return "El computador gano";
    }
}

function jugar(opcionJugador) {
    const opcionUsuario = obtenerOpcionComputadora();
    const resultado = determinaResultado(opcionJugador, opcionUsuario);
    const mensaje = `Elegiste ${opcionJugador}. El computador eligio ${opcionUsuario}. ${resultado}`;
    document.getElementById("resultado").textContent = mensaje;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("piedra").addEventListener("click", function () {
        jugar("piedra");
    });

    document.getElementById("papel").addEventListener("click", function () {
        jugar("papel");
    });

    document.getElementById("tijeras").addEventListener("click", function () {
        jugar("tijeras");
    });
});