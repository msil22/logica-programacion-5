var numeroSecreto = Math.floor(Math.random() * 100) + 1;

var intentos = 0;

while (true) {
    var intentoUsuario = prompt("Intenta adivinar el número secreto (entre 1 y 100):");

    if (intentoUsuario === null || isNaN(intentoUsuario)) {
        alert("Por favor, ingresa un número válido.");
        continue;
    }

    intentoUsuario = parseInt(intentoUsuario);
    intentos++;

    if (intentoUsuario === numeroSecreto) {
        alert("Felicidades! Adivinaste el número secreto (" + numeroSecreto + ") en " + intentos + " intentos.");
        break;
    } else if (intentoUsuario < numeroSecreto) {
        alert("El número secreto es mayor. Sigue intentando!");
    } else {
        alert("El número secreto es menor. Sigue intentando!");
    }
}