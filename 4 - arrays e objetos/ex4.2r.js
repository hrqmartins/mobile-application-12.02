/*
Objetos armazenam dados com pares chave-valor. Podemos acessar as propriedades com ponto (.) ou com colchetes (['']).
 São ideais para representar entidades do mundo real.
*/

let pessoa = {
  nome: "Carlos",
  idade: 30,
  ativo: true
};
console.log(pessoa.nome);        // "Carlos"
console.log(pessoa["idade"]);    // 30
console.log(pessoa.ativo);       // true
// Adicionando nova propriedade:
pessoa.email = "carlos@email.com";
console.log(pessoa.email);       // "carlos@email.com"