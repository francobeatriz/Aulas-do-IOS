// //1 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar 
// um novo array contendo o dobro de cada elemento.

// const valores = [
//     {
//         number:1,
//     },
//     {
//         number:2,
//     },
//     {
//         number:3,
//     },
    
// ]

// let novoArray = valores.map((vp) => vp.number * 2 );
// console.log(novoArray)

//-------------------------------------------------------------------------------

// 2 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar 
// um novo array contendo apenas os números pares.

// let numEx2 = [1,2,3,4,5]

// let numEx2_2 = numEx.filter((num) => num % 2 == 0 ) 
// console.log(numEx2_2);

//-------------------------------------------------------------------------------

// 3 - Dado o array fruits = ['apple', 'banana', 'orange', 'kiwi'], utilize o método 
// forEach para exibir cada fruta no console.

// let frutas = ["apple","banana","orange","kiwi"];

// frutas.forEach((nome) => {
//     console.log(nome)
// })


//-------------------------------------------------------------------------------

// 4 - Dado o array students = [
// { name: 'John', age: 20 },
// { name: 'Jane', age: 25 }, 
// { name: 'Mark', age: 22 }
// ], 
// Utilize o método forEach para exibir o nome e a idade de cada aluno no 
// console.

let alunos = [
    { nome: 'John', idade: 20 },
    { nome: 'Jane', idade: 25 }, 
    { nome: 'Mark', idade: 22 }
    ];

alunos.forEach((estudante) => {
    console.log(estudante.nome + "Tem" + estudante.idade);
});


//------------------------------------------------------------------------------- ctrl d seleciona tudo 

// 5 - Dado o array students = [
// { name: 'John', age: 20 },
// { name: 'Jane', age: 25 },
// { name: 'Mark', age: 22 }
// ], 
// Utilize o método map para criar um novo array contendo apenas os nomes 
// dos alunos

let alunos2 = alunos.map(alunos => alunos.nome) 
console.log(alunos2)