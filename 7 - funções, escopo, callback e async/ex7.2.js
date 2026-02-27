// Escopo
// Variável Global: visível em qualquer lugar do código
let app = "MinhaApp"; 

function mostrarInfos() {
  // Variável Local: só existe dentro das chaves desta função
  let versao = "1.0"; 
  
  console.log(app);    // "MinhaApp"
  console.log(versao); // "1.0"
}

mostrarInfos();

// Callback
function executarTarefa(nomeTarefa, callback) {
  console.log(`Iniciando: ${nomeTarefa}`);
  callback(); 
}

// Chamando a função e passando uma Arrow Function como parâmetro
executarTarefa("Download de Arquivo", () => console.log("Tarefa concluída!"));

//Async
async function buscarPerfil() {
  // O 'async' faz com que a função retorne automaticamente uma Promise
  return "Perfil carregado: Usuário Padrão";
}

// O .then() aguarda a Promise ser "resolvida" para mostrar o resultado
buscarPerfil().then(resultado => console.log(resultado));