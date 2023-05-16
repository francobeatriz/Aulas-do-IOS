let tarefas = [
    {
        id:"atividade01",
        desc:"Café com os clientes",
        concluir: true,
    },

    {
        id:"atividade02",
        desc:"Reunião",
        concluir: false,
    },

    {
        id:"atividade03",
        desc:"Reunião",
        concluir:false,
    }
];

// console.log(tarefas[1].desc)
// console.log(tarefas[1].concluir)
// console.log(`A ${tarefas[1].desc} está concluida?:
// ${tarefas[1].concluir} - Descrição ${tarefas[1].desc}`)

console.log(typeof tarefas);
console.log(tarefas);
const texto = JSON.stringify(tarefas);
console.log(texto);
