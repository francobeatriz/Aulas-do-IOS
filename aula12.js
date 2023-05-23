////////////////// DOM ///////////////////
/*
//window
//document
// head body
// body {
    h1 
    p
    ul {
        li
        li
        li
    }
}
*/

// window.alert(`Olá aluno!`)

// console.log(document.body) // ver as informações impressas no console 

// document.title = "Aula DOM" // alterar o titulo

// let title = document.createElement('H1')       //adicionar elementos
// title.innerHTML = "Aula 12";
// document.body.appendChild(title);

// let title = document.createElement('H2')       
// title.innerHTML = "ABCD";
// document.body.appendChild(criandoh2);

// let title = document.createElement('p')       
// title.innerHTML = "BIA";
// document.body.appendChild(criandop);


/////////////////// Método getElementById ///////////////////

let title = document.getElementById("tituloPrin")

title.innerHTML = "Olá aluno!";
title.style.color = "red"
title.style.textAlign = "center"

let paragraph = document.getElementById("para1")

paragraph.innerHTML = "SEI LÁ";
paragraph.style.textAlign = "justify"