let horasEstacionadas = parseFloat(prompt("¿Cuántas horas o fracciones estuvo el vehículo en el parqueadero?"));

if (horasEstacionadas > 0) {
    const tarifaPorHora = 1500;
    let horasACobrar;
    if (parseInt(horasEstacionadas) === horasEstacionadas) {
        horasACobrar = horasEstacionadas; 
    } else {
        horasACobrar = parseInt(horasEstacionadas) + 1;
    }
    let totalPagar = horasACobrar * tarifaPorHora;
    alert("Tiempo estacionado: " + horasEstacionadas + " horas\nHoras cobradas: " + horasACobrar + "\nTotal a pagar: " + totalPagar);
} else {
    alert("El tiempo ingresado no es válido. Por favor, ingrese un número mayor a 0.");
}
