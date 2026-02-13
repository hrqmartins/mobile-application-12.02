// Podemos acessar uma propriedade que não existe em um objeto — o JavaScript retorna undefined automaticamente, sem gerar erro.

let produto = { nome: "Teclado", preco: 150 };
console.log(produto.nome);        // Teclado
console.log(produto.preco);       // 150
console.log(produto.desconto);    // undefined — propriedade não existe
// Adicionando a propriedade depois:
produto.desconto = 20;
console.log(produto.desconto);    // 20