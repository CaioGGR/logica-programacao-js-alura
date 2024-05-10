// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

numero = 0

while (numero < 1000) {
  console.log(numero)
  numero = parseInt(Math.random() * 1000 + 1)
}
