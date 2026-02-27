/*
O switch é ideal quando uma variável pode ter vários valores específicos e queremos executar ações diferentes para cada um. 
Cada case precisa de um break para evitar "cair" no próximo caso.
*/

let cor = "azul";
switch (cor) {
  case "vermelho":
    console.log("Parar!");
    break;
  case "amarelo":
    console.log("Atenção!");
    break;
  case "azul":
    console.log("Cor favorita selecionada!");
    break;
  default:
    console.log("Cor não reconhecida.");
}
// Saída: Cor favorita selecionada!