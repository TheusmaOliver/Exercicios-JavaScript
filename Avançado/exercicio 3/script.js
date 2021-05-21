const aluno = {

    nome: 'Maria',

    sobrenome: 'da Silva',

    notas: [7, 10, 8, 5, 7, 9],

}

const totalBimestres = aluno.notas.length

const somaNotas = aluno.notas.reduce((acc, curr) => {
    return acc + curr
}, 0)

const media = Math.round(somaNotas / totalBimestres)

console.log(`A media da ${aluno.nome} foi ${media} para o total de ${totalBimestres} bimestres.`)