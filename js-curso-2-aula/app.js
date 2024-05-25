/* let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo do número secreto'

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um número entre 1 e 10' */

function mudaTextoHTML(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
}

mudaTextoHTML('h1', 'Jogo do número secreto')
mudaTextoHTML('p', 'Escolha um número entre 1 e 10')
numeroSecreto = gerarNumeroAleatorio()

function verificarChute() {
  let chute = document.querySelector('input').value // pega o valor do que foi digitado no input
  console.log(chute == numeroSecreto)
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1)
}
