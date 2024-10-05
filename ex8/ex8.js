
let alturaDegrau = parseFloat(prompt("Digite a altura de um degrau (em metros):"));

let alturaDesejada = parseFloat(prompt("Digite a altura que deseja alcançar (em metros):"));

let quantidadeDegraus = Math.ceil(alturaDesejada / alturaDegrau);

alert("Você precisará subir " + quantidadeDegraus + " degraus para alcançar a altura desejada.");
