// Criar uma função que exibe "Olá, mundo!" no console.

function oi() {
  console.log('Olá Mundo!')
}

oi()

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function recebeNome() {
  nome = prompt('Qual é o seu nome?')
  alert(`Olá, ${nome}!`)
}

recebeNome()

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function recebeNumero(numero) {
  return numero * 2
}

console.log(recebeNumero(10))

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaDeTres(numero1, numero2, numero3) {
  return (numero1 + numero2 + numero3) / 3
}

console.log(mediaDeTres(10, 20, 30))

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorDosDois(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

console.log(maiorDosDois(40, 30))

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicaNumero(numero) {
  return numero * numero
}

console.log(multiplicaNumero(5))
