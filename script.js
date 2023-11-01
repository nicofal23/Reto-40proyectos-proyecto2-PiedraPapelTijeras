document.addEventListener("DOMContentLoaded", function() {
    Swal.fire({
        title: "Ingrese su nombre:",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: false,
        confirmButtonText: "Aceptar",
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            const nombre = result.value;
            document.getElementById("usuario").innerText = `${nombre}`;
        }
    });
});

const choices = {
    piedra: "/assets/img/piedra.png",
    papel: "/assets/img/papel.png",
    tijeras: "/assets/img/tijeras.png",
};

function play(choice) {
    const compChoice = computerChoice();
    document.getElementById("userImage").src = choices[choice];
    document.getElementById("computerImage").src = choices[compChoice];

    const result = determineWinner(choice, compChoice);
    document.getElementById("result").innerText = result;
}

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return Object.keys(choices)[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "Empate!";
    } else if ((user === "piedra" && computer === "tijeras") || (user === "papel" && computer === "piedra") || (user === "tijeras" && computer === "papel")) {
        return "¡Ganaste!";
    } else {
        return "¡La máquina gana!";
    }
}

