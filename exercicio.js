let carro1 = {
    Nome1:"HB20",
    Marca1:"Hyundai",
    Cor1:"Prata",
    Ano1:2019,
}

let carro2 = {
    Nome2:"Onix",
    Marca2:"Chevrolet",
    Cor2:"Preto",
    Ano2:2020,
}

let carro3 = {
    Nome3:"Civic",
    Marca3:"Honda",
    Cor3:"Vermelho",
    Ano3:2002,
}

let carro4 = {
    Nome4:"Corolla",
    Marca4:"Toyota",
    Cor4:"Azul",
    Ano4:2003,
}

const {
    Nome1,
    Marca1,
    Cor1,
    Ano1,
} = carro1

const {
    Nome2,
    Marca2,
    Cor2,
    Ano2,
} = carro2

const {
    Nome3,
    Marca3,
    Cor3,
    Ano3,
} = carro3

const {
    Nome4,
    Marca4,
    Cor4,
    Ano4,
} = carro4

if (carro1 <= 2002) {
    console.log(`Não paga IPVA`)
} else {
    console.log(`Paga IPVA`)
}

if (carro2 <= 2002) {
    console.log(`Não paga IPVA`)
} else {
    console.log(`Paga IPVA`)
}

if (carro3 <= 2002) {
    console.log(`Não paga IPVA`)
} else {
    console.log(`Paga IPVA`)
}

if (carro4 <= 2002) {
    console.log(`Não paga IPVA`)
} else {
    console.log(`Paga IPVA`)
}