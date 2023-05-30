///////////////////// FOR ///////////////////////

// let items = window.document.getElementsByClassName("item")


// for (let i= 0; i <= items.length ; i++) {
//     items[i].style.color = "red"
// }
// <ul>
// <li>Item 01</li>
// <li>Item 02</li>
// <li>Item 03</li>
// <li>Item 04</li>
// </ul>

const mediaAluno = () => {
    let notaT1 = document.getElementById("nota01");
    let notaT2 = document.getElementById("nota02");
    let notaNum1  = Number(notaT1.value);
    let notaNum2  = Number(notaT2.value);

    let resultado = ( notaNum1 + notaNum2 ) / 2;

    res.innerHTML = `Sua média é: ${resultado}`;
};
