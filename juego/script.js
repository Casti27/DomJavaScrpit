let primera = parseInt(prompt("¿Colón descubrió América? \n 1)Si \n 2)No"));

if (primera == 1) {
    let segunda = parseInt(prompt("¿La independencia de México fue en el año 1810? \n 1)Si \n 2)No"));
    if (segunda == 1) {
        let tercera = parseInt(prompt("¿The Doors fue un grupo de rock Americano? \n 1)Si \n 2)No"));
        if (tercera == 2) {
            document.getElementById("winner-message").style.display = "block";
        } else {
            document.getElementById("loser-message").style.display = "block";
        }
    } else {
        document.getElementById("loser-message").style.display = "block";
    }
} else {
    document.getElementById("loser-message").style.display = "block";
}
