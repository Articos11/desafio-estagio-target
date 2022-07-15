// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

let SP = 67836.43
let RJ = 36678.66 
let MG = 29229.88
let ES = 27165.48
let outros = 19849.53
let total = SP + RJ + MG + ES + outros

let spPercentage = Number(((SP / total) * 100).toFixed(1))
let rjPercentage = Number(((RJ / total) * 100).toFixed(1))
let mgPercentage = Number(((MG / total) * 100).toFixed(1))
let esPercentage = Number(((ES / total) * 100).toFixed(1))
let ouPercentage = Number(((outros / total) * 100).toFixed(1))

console.log(`A porcentagem de vendas de São Paulo foi de ${spPercentage}%`)
console.log(`A porcentagem de vendas do Rio de Janeiro foi de ${rjPercentage}%`)
console.log(`A porcentagem de vendas do Minas Gerais foi de ${mgPercentage}%`)
console.log(`A porcentagem de vendas do Espírito Santo foi de ${esPercentage}%`)
console.log(`A porcentagem de vendas dos outros estados foi de ${ouPercentage}%`)


