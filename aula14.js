///////////////////querySelector//////////////////

//retorna o primeiro elemento "p"
let elemento1 = document.querySelector("p");
elemento1.style.color = "pink";

//Elemento por classe = ".par1"
let elemento2 = document.querySelector(".par1");
elemento2.style.color = "green";

//Elemento por ID
let elemento3 = document.querySelector("#par3");
elemento3.style.color = "blue";

//Eventos
const cliquei = () => {
    let elemento4 = document.querySelector("#par5");
    elemento4.style.color = "red";
}

//Varios elementos: querySelectorAll
let itemLista = document.querySelectorAll(".item");
itemLista.style.color = "pink";

for (let i = 0; i <= itemLista.length ; i++) {
    itemLista[i].style.color = "pink";
}