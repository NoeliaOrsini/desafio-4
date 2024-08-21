const minimo = 1;
const maximo = 10;

function iniciarJuego() {
    const numeroAdivinar = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    let intentosRestantes = 3;

    while (intentosRestantes > 0) {
        let intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));

        if (intento === numeroAdivinar) {
            alert("¡Felicidades! Adivinaste el número.");
            break;
        } else {
            intentosRestantes--;
            alert(`Incorrecto. Te quedan ${intentosRestantes} intentos.`);
        }
    }

    if (intentosRestantes === 0) {
        alert(`Lo siento, el número era ${numeroAdivinar}.`);
    }

    if (confirm("¿Quieres jugar de nuevo?")) {
        iniciarJuego();  // Reinicia el juego
    } else {
        alert("¡Gracias por jugar!");
    }
}

// Iniciar el juego
iniciarJuego();

