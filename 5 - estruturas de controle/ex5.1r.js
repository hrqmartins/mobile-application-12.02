/*
Usamos if/else if/else para tomar decisões com base em condições. O programa testa cada condição de cima 
para baixo e executa o bloco correspondente à primeira condição verdadeira.
*/

let hora = 14;
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
// Como hora = 14, a saída será: Boa tarde!