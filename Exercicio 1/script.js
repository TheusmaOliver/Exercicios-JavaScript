let nome = prompt('Digite o seu Nome:')
let idade = prompt('Digite sua idade:')

if (idade >= 18) {
    document.write(`Olá ${nome} , você é MAIOR de idade`)
} else {
    document.write(`Olá ${nome}, você é MENOR de idade`)
}
