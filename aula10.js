////////////////////////// FOREACH ////////////////////////////

for (let i = 0  ; i <= 10 ; i++) {
    console.log(`Contador: ${i}`)
}

console.log(`-----------------------------------`)

let alunoAprovados = ["Vitor","Samuel","Bruno","Hilary","Day"];

alunoAprovados.forEach((nome,ind) => {
    console.log(`Alunos aprovados: ${nome}, num chamada: ${ind}`)
})


let salaAula = ["Vitor","Samuel","Bruno","Hilary","Day"];

const nomes = (nome)=> {
    return console.log(`Olá aluno: ${nome}`);
};

salaAula.forEach((a,b) => {
     nomes(a,b)                      // (item)
});

console.log(`-----------------------------------`)

let cores = ["Azul","Amarelo","Preto","Verde"]

cores.forEach((item) => {
    (item)
})

console.log(`-----------------------------------`)

let email = 
["email1@gmail.com",
"email2@gmail.com",
"email3@gmail.com",
"email4@gmail.com",
"email5@gmail.com",
"email6@gmail.com"];


email.forEach((valor) => {
    console.log(`Email enviado para: ${email} com sucesso!`)
})

console.log(`-----------------------------------`)

const msg = (valorEmail) => {
    console.log(`Email enviado com sucesso para:${valorEmail}`);
};

email.forEach((item) => {
    msg(item)
});
