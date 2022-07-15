// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


// Comentários do desenvolvedor! 



function isFibonacci(fib) {
let anterior = 0
let atual = 1
let proximo = 1

// Uma estrutura de repetição simples que irá aumentar o valor do fibonacci.  
for (let i = 0; i < fib; i++) {
    console.log(proximo)
    anterior = atual + proximo
    atual = proximo
    proximo = anterior
}
// Condicionais para testar o valor atual do Fibonacci.
if (Number.isInteger(Math.sqrt(5 * (proximo * atual) - 4)) || Number.isInteger(Math.sqrt(5 * (proximo * atual) + 4))) {
    return true
} else {
    return false
}}

// Altere o valor da chamada da função para alterar o resultado.
// Chamadas testadas: de 1 a 10. 
console.log(isFibonacci(10))