/*
Crie um objeto chamado aluno com as propriedades nome e matricula.
Em seguida:
Exiba nome e matricula (existem)
Tente exibir a propriedade nota (não existe ainda — deve retornar undefined)
Adicione a propriedade nota ao objeto com um valor
Exiba nota novamente (agora deve mostrar o valor)
*/

let aluno = {nome: "Henrique", matricula: 563620};
console.log("Nome: " + aluno.nome);
console.log("Matricula: " + aluno.matricula);
console.log("Nota: " + aluno.nota);
aluno.nota = 10;
console.log("Nota: " + aluno.nota);