// Arrays armazenam listas ordenadas. Cada item tem um índice (começando em 0). O método push() adiciona itens ao final e length retorna o tamanho.
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]);          // "Maçã"   — primeiro item
console.log(frutas[2]);          // "Laranja" — terceiro item
console.log(frutas.length);      // 3
frutas.push("Uva");              // Adiciona ao final
console.log(frutas.length);      // 4
console.log(frutas[3]);          // "Uva"