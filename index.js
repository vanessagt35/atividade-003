let valor1 = prompt("Digite o primeiro valor:");
let valor2 = prompt("Digite o segundo valor:");
let operador = prompt("Digite o operador (+, -, *, /):");

let resultado;

switch (operador) {
  case "+":
    resultado = Number(valor1) + Number(valor2);
    break;
  case "-":
    resultado = valor1 - valor2;
    break;
  case "*":
    resultado = valor1 * valor2;
    break;
  case "/":
    resultado = valor1 / valor2;
    break;
  default:
    console.log("Operador inválido");
}

document.getElementById("resultado").innerHTML = `O resultado é ${resultado}`;

