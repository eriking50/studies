const funcionario = {nome: "Eu", salario: 1234.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// ----------------

const grupoA = ['Joao', 'Maria', 'Gloria']
const grupoFinal = ['MPrfto', 'Rafaela', ...grupoA]
console.log(grupoFinal)