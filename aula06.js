// let num = 0 ;
// while (num <= 5) {
//     console.log(`somando numeros`)
// }

// for(let num = 0; num <= 5 ;  num += 1) {
//     console.log(`somando num: ${num}`)
// }

// ARRAY //

// let SalaAula = ["Bia","Samuel","Adriana","Hilary",2]
// console.log(SalaAula.length);
// console.log(SalaAula[3]);

// let nome = "Beatriz";
// console.log(nome.length)

// let mercado = [
//     ["Pao","Arroz","Feijão"],
//     ["Veja","Detergente","Sabão"],
//     ["Chocolate","Danone","Biscoito"]
// ];

// console.log(mercado[0][2])

// mercado[2][2] = "suco"
// console.log(mercado[2][2]);

// let numeros = [1,2,3,4,5]
// console.log(numeros.join('-'));
// console.log(typeof numeros);

// let numeros2 = numeros.toString();
// console.log(numeros2)
// console.log(typeof numeros2)

// const frutas = ["Banana","Morango","Mamão","Abacaxi","Abacate"]
// console.log(frutas.length);

// for (let f = 0; f < frutas.length; f++) 
// console.log(`Eu gosto de: ${frutas[f]} \n`);

// let nomes = ["Ermeson","Jaqueline","Luan","Adriana"];
// nomes [4] = 'Bia'
// console.log(nomes)

// push - insere um elemento | pop - remove o ultimo elemento

// console.log(nomes);
let nomes = ["Ermeson","Jaqueline","Luan","Adriana"];
// nomes.pop ()
// console.log(nomes);
// nomes.push('Bia') 
// console.log(nomes);
// nomes.push('Luan')
// console.log(nomes);

//inserir valores e remover valor no inicio do array

console.log(nomes);
nomes.shift();
console.log(nomes);
nomes.unshift("Dayane");
console.log(nomes)

//delete - apagar um elemento

delete nomes[2];
console.log(nomes); 