function entrar() {
    let inputNome = prompt('Digite o seu Nome:')
    let idade = prompt('Digite sua idade:')

    if (inputNome === '' || idade === '') {
        alert('Preencha os campos corretamente!')
        return
    }

    let maiorOuMenor

    if (idade >= 18) {
        maiorOuMenor = 'maior'
    } else if (idade < 18) {
        maiorOuMenor = 'menor'
    }

    let mensagemPersonalizada = ''

    if (inputNome === 'Thomas Anderson' || inputNome === 'thomas anderson') {
        mensagemPersonalizada = 'Você é personagem do filme The Matrix!'
    }

    let saudacao = `Olá ${inputNome}, você é ${maiorOuMenor} de idade!`

    document.querySelector('#saudacao').innerHTML = saudacao
    document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
}
