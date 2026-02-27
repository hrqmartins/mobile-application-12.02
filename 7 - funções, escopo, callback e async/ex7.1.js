// tradicional
function calcularArea(base, altura) {
  return (base * altura) / 2;
}
console.log(calcularArea(10, 5)); // Saída: 25

// arrow function
const calcularAreaArrow = (base, altura) => (base * altura) / 2;
console.log(calcularAreaArrow(10, 5)); // Saída: 25

// tradicional
function cumprimentar(nome, periodo) {
  return "Boa " + periodo + ", " + nome + "!";
}
console.log(cumprimentar("Ana", "tarde")); // Saída: Boa tarde, Ana!

// arrow function
const cumprimentarArrow = (nome, periodo) => `Boa ${periodo}, ${nome}!`;
console.log(cumprimentarArrow("Carlos", "noite")); // Saída: Boa noite, Carlos!