// let nota01 = 8;
// let nota02 = 9
// let media = ( nota01 +nota02)/2

// function calMedia (nota01, nota02) {
//     return (nota01 + nota02) / 2
// }

// console.log(calMedia(10,5));  


// criar uma função para calcular o IMC do usuário. (Peso/altura*altura)
// nome da função deve seguir os padrões de variáveis
// utilizar a função criada para passar o valor do IMC  no console
// exibir apenas dois numeros depois da  virgula



function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}


var imc = calcularIMC(peso, altura);
console.log("Seu IMC é: " + imc);

console.log(imc(80, 1.57))