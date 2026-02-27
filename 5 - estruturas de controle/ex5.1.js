/*
Crie um verificador de notas com as regras abaixo:
nota >= 7 → exibir "Aprovado"
nota >= 5 e < 7 → exibir "Recuperação"
nota < 5 → exibir "Reprovado"
Teste com ao menos dois valores diferentes e comente no código qual deveria ser a saída esperada para cada nota testada.
https://whimsical.com/aula-12-02-2026-exemplos-e-exercicios-js-NwaeFaviKAhg9n38GkTj21
*/ 


let nota = 8; 

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

nota = 4;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
