/*
Crie um objeto chamado veiculo com as propriedades: marca, modelo, ano e disponivel (boolean).
Em seguida:
Exiba marca e modelo usando notação de ponto (.)
Exiba ano e disponivel usando notação de colchetes ([])
Adicione a propriedade cor ao objeto e exiba seu valor
*/

let veiculo = {
    marca: "Mitsubitsh",
    modelo: "Lancer Evolution",
    ano: 2016,
    disponivel: true
}

console.log("Marca: " + veiculo.marca + "\nModelo: " + veiculo.modelo)
console.log("Ano: " + veiculo[2] + "\nDisponibilidade: " + veiculo[3])

veiculo.cor = "Preto"
console.log(veiculo.cor)