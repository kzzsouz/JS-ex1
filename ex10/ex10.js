
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let nota4 = parseFloat(prompt("Digite a quarta nota:"));


let media = (nota1 + nota2 + nota3 + nota4) / 4;


let resultado;
if (media > 6.0) {
    resultado = "Aprovado";
} else if (media === 6.0) {
    resultado = "Recuperação";
} else {
    resultado = "Reprovado";
}

alert("A média é: " + media + "\nResultado: " + resultado);
