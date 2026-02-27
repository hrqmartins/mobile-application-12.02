/*
O escopo define onde a variável pode ser usada. Callbacks são funções passadas como parâmetros. 
Funções async lidam com tarefas que demoram (como buscar dados de um servidor).
*/

// Código do exemplo — Escopo:
let global = "Sou global";
function testarEscopo() {
  let local = "Sou local";
  console.log(global);           // Funciona
  console.log(local);            // Funciona
}
testarEscopo();
console.log(global);             // Funciona
// console.log(local);           // ❌ Erro — fora do escopo

// Código do exemplo — Callback:
function processar(callback) {
  console.log("Processando...");
  callback();
}
processar(() => console.log("Finalizado!"));
// Saída: Processando... / Finalizado!

//Código do exemplo — Função Assíncrona:
async function pegarDados() {
  return "Dados recebidos!";
}
pegarDados().then(console.log);  // D