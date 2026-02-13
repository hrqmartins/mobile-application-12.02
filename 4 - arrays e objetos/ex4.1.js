/*
Crie um array chamado tarefas com 3 tarefas do dia (strings).
Em seguida:
Exiba a primeira e a última tarefa pelo índice
Exiba o total de tarefas com .length
Adicione uma 4ª tarefa usando push()
Exiba o novo total de tarefas
*/
let tarefas = ["Arrumar a cama", "Cozinhar", "Comer"]
console.log("Primeira tarefa: " + tarefas[0])
console.log("Ultima tarefa: " + tarefas[2])
console.log("Total de tarefas: " + tarefas.length)
tarefas.push("Se vestir")
console.log("Novo total de tarefas: " + tarefas.length)