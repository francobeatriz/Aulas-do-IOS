// if else
// 6 ~ 7 - Ap. conselho
// 9 > Quadro Honra

// let media = 8;

// if (media >= 9) {
//     console.log('Quadro de Honra');
// } else if (media >= 7) {
//     console.log(`Aluno aprovado`);
// } else if (media >= 6) {
//     console.log(`Ap. conselho!`);
// } else {
//     console.log('Aluno reprovado!');
// }

// console.log('Fim');


// while - testa  antes // do while - testa depois 

// let contador = 0 
// while (contador <= 10) {
//     console.log (`Valor do contador: ${contador}`);
//     contador += 2;
// } while (contador <= 10);

// array de objetos 

let pessoa = {
    nome: "Beatriz",
    sobreNome: "Franco",
    idade: 21,
    endereco: {
        rua: "Av Paulista",
        numeroR: 321,
    },
    escolaridade: "E.M",
};

console.log(`Olá, ${pessoa.nome}! vc tem ${pessoa.idade} anos de idade e mora na: ${pessoa.endereco.rua}`);

const {
    nome,
    idade,
    escolaridade,
    endereco: {rua},
} = pessoa;

console.log(`Olá, ${nome}! vc tem ${idade} anos de idade e mora na: ${rua}`);

