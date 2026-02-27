/*
O while é usado quando não sabemos com precisão quantas iterações serão necessárias — só sabemos a condição de parada.
 É comum em situações onde o usuário controla o fluxo.
*/

let contador = 0;
while (contador < 3) {
  console.log("Número:", contador);
  contador++;
}
// Saída:
// Número: 0
// Número: 1
// Número: 2