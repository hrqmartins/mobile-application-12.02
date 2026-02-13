/*
null representa ausência intencional de valor — o programador define que a variável está vazia. Já undefined surge 
quando uma variável foi declarada mas nunca recebeu um valor.
*/

let usuarioLogado = null;         // Nenhum usuário logado ainda
let senhaDigitada;                // undefined — campo não preenchido
console.log(usuarioLogado);       // null
console.log(senhaDigitada);       // undefined
// Simulando login:
usuarioLogado = "João";
senhaDigitada = "12345";
console.log(usuarioLogado);       // João
console.log(senhaDigitada);       // 12345