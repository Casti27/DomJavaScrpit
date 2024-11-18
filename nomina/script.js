let basicoMes = parseInt(prompt("¿Cuál es su salario básico mensual?"));
let horasExtras = parseInt(prompt("Digite la cantidad de horas extras:"));
let falloDia = parseInt(prompt("¿Cuántos días faltó?"));

let salarioTotal;
let descMes;
let extrasTotales;

if (horasExtras > 0) {
    let typeExtras = parseInt(prompt("Digite el tipo de horas extras:\n1)Diurna\n2)Nocturnas\n3)Festiva\n4)Dominicales"));

    let valorHora = basicoMes / 30 / 8;
    let acuExtras;

    if (typeExtras == 1) {
        acuExtras = (valorHora / 100) * 25;
        extrasTotales = acuExtras * horasExtras;
    } else if (typeExtras == 2) {
        acuExtras = (valorHora / 100) * 35;
        extrasTotales = acuExtras * horasExtras;
    } else if (typeExtras == 3) {
        acuExtras = (valorHora / 100) * 75;
        extrasTotales = acuExtras * horasExtras;
    } else if (typeExtras == 4) {
        acuExtras = valorHora;
        extrasTotales = acuExtras * horasExtras;
    } else {
        alert("El tipo de horas es inválido.");
        extrasTotales = 0;
    }
} else {
    extrasTotales = 0;
}

descMes = (basicoMes / 30) * falloDia;

let falseTotal = extrasTotales + (basicoMes - descMes);

const salud = (falseTotal / 100) * 4;
const pension = (falseTotal / 100) * 4;
const totalDesc = salud + pension + descMes;

salarioTotal = falseTotal - (salud + pension);


document.getElementById("total-income").textContent = `$${extrasTotales}`;
document.getElementById("total-deductions").textContent = `$${totalDesc}`;
document.getElementById("total-salary").textContent = `$${salarioTotal}`;

document.getElementById("results").style.display = "block";
