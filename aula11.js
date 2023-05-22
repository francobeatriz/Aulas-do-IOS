////////////////////////////// CLASS /////////////////////////////////

class Pessoa01 {
    constructor(Nome,SobreNome,Idade,DataNasc,End) {
        this.Nome = Nome;
        this.SobreNome = SobreNome;
        this.Idade = Idade;
        this.DataNasc = DataNasc;
        this.End = End;
    }
}



let kaue = new Pessoa01("Kaue","Paixão", 18, "24-09-2004", "Av. General Ataliva Leonel")          //jeito02 certo

console.log(kaue);
console.log(typeof kaue);

console.log(`Olá, ${kaue.Nome} vc tem ${kaue.Idade} anos de idade e faz niver ${kaue.DataNasc}`)


/////////////////////// EXERCICIO /////////////////////////

class Animal01 {
    constructor(Tipo,Idade,Cor,Raça,Caracteristica) {
        this.Tipo =  Tipo;
        this.Idade = Idade;
        this.Cor = Cor;
        this.Raça = Raça;
        this.Caracteristica = Caracteristica;
    }
}

let Mel = new Animal01 ("Cachorra", 9,"Caramelo","SRD","Dorminhoca")

let Chloe = new Animal01 ("Cachorra", 3,"Branca","Cocker","Eletrica")

let Thor = new Animal01 ("Gato", 2 ,"Laranja","SRD","Arteiro")

console.log(`Meu animal de estimação é uma ${Mel.Tipo}, tem ${Mel.Idade} anos de idade, da cor ${Mel.Cor} e da raça ${Mel.Raça}, ela é muito ${Mel.Caracteristica}.`)
console.log(`Meu animal de estimação é uma ${Chloe.Tipo}, tem ${Chloe.Idade} anos de idade, da cor ${Chloe.Cor} e da raça ${Chloe.Raça}, ela é muito ${Chloe.Caracteristica}.`)
console.log(`Meu animal de estimação é um ${Thor.Tipo}, tem ${Thor.Idade} anos de idade, da cor ${Thor.Cor} e da raça ${Thor.Raça}, ele é muito ${Thor.Caracteristica}.`)


class Carro01 {
    constructor(Nome,Marca,Cor,Ano) {
        this.Nome = Nome;
        this.Marca = Marca;
        this.Cor = Cor;
        this.Ano =  Ano;
    }
}

let HB20 = new Carro01 ("HB20","Hyundai","Prata", 2019)

let Onix = new Carro01 ("Onix","Chevrolet","Preto", 2020)

let Civic = new Carro01 ("Civic","Honda","Vermelho", 2019)

console.log(`Meu carro é um ${HB20.Nome}, da marca ${HB20.Marca}, cor ${HB20.Cor} e do ano de ${HB20.Ano}.`)
console.log(`Meu carro é um ${Onix.Nome}, da marca ${Onix.Marca}, cor ${Onix.Cor} e do ano de ${Onix.Ano}.`)
console.log(`Meu carro é um ${Civic.Nome}, da marca ${Civic.Marca}, cor ${Civic.Cor} e do ano de ${Civic.Ano}.`)

