
let salario = parseFloat(prompt("Digite o salário do empregado:"));

let salarioAnterior = salario;
let salarioNovo; 


if (salario < 2500) {
 
    salarioNovo = salario * 1.25; 
} else {

    salarioNovo = salario;
}


alert("Salário anterior: R$ " + salarioAnterior.toFixed(2) + "\n" +
      "Salário novo: R$ " + salarioNovo.toFixed(2));
