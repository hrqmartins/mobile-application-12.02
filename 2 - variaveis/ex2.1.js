/*
Usamos let para variáveis cujo valor pode mudar e const para valores fixos. Evitamos var por questões de escopo.
*/

const nomeApp = "MeuApp";       // Constante — não muda
let versao = 1;                 // Pode mudar
console.log(nomeApp);           // MeuApp
console.log(versao);            // 1
versao = 2;                     // Atualizando a versão
console.log(versao);            // 2
// nomeApp = "OutroApp";        // ❌ Isso causaria erro!