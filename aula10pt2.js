/////////////////////////  MAP //////////////////////////

const valores = [
    {
        produto:"cel",
        valor:2000,
    },
    {
        produto:"tv",
        valor:1000,
    },
    {
        produto:"pc",
        valor:5000,
    },
    
]
// 10% valores

let novosValores = valores.map((vp) => vp.valor * 1.1 );
console.log(novosValores)
console.log(typeof valores)
console.log(valores)

///////////////////////// FILTER //////////////////////////////

let idadeCandidatos = [14,18,17,23,29,45]
// 15 ~ 29 anos
let alunoAprovados = idadeCandidatos.filter((idade) => {
    return idade >= 15 && idade <= 29;
});

console.log(alunoAprovados)

//////////////////////////// FIND ////////////////////////////


