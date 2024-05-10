// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

numero = 0

while (numero <= 10) {
  console.log(numero)
  numero = parseInt(Math.random() * 10 + 1)
}
