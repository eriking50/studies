function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}
const aluno = 'Eu'
const situa = 'App'
console.log(tag `${aluno} está ${situa}`)