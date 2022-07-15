// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.


let maior = require('./dados.json')

maior.sort((a, b) => {
    return a.valor - b.valor;
}) 

console.log(maior[maior.length - 1])
// O maior valor é o do dia 16. 

let menor = require('./dados.json')

menor.sort((a, b) => {
    return b.valor - a.valor
})

console.log(menor[menor.length - 1])
// O menor valor é o do dia 26.

let dados = require('./dados.json')
let ignorar = dados.filter(a => {
    return a.valor > 0
})
let soma = ignorar.reduce((a, b) => {
    return a + b.valor / ignorar.length - 1;
}, 0)

console.log(`O valor total da empresa é de: ${soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)