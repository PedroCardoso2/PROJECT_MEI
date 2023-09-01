/*

const frm = document.querySelector("form")
const button = document.querySelector("#save");
const text = document.querySelector("#text-date");


function ModDate() {
    // caixa-jud
    // caixa-prazo
    //datetime-local
};




button.addEventListener("click", (e) => {
    e.preventDefault();



    let listProcess = [];

    const numberoProcess = document.querySelector("#ndoprocesso").value;
    const dataChegada = document.querySelector("#datadapublicacao").value;
    const recebida = document.querySelector("#caixa-recebido").value;
    const tipoJustica = document.querySelector("#caixa-justica").value;
    const autor = document.querySelector("#autor-text").value;
    const situacaoJustica = document.querySelector("#caixa-liminar").value;
    const obrigacaoFazer = document.querySelector("#obrigacao-fazer").value;
    const valorMult = document.querySelector("#valor-mult").value;
    const valorLimit = document.querySelector("#valor-limit").value;
    const tipoMult = document.querySelector("#caixa-multa").value;
    const determinacaoJud = document.querySelector("#caixa-jud").value;
    const prazoFinal = document.querySelector("#caixa-prazo").value;

    let formul = {
        numberoProcess: numberoProcess,
        dataChegada: dataChegada,
        recebida: recebida,
        tipoJustica: tipoJustica,
        autor: autor,
        situacaoJustica: situacaoJustica,
        obrigacaoFazer: obrigacaoFazer,
        valorMult: valorMult,
        valorLimit: valorLimit,
        tipoMult: tipoMult,
        determinacaoJud: determinacaoJud,
        prazoFinal: prazoFinal
    };

    listProcess.push(formul);


    console.log(formul);
    console.log(listProcess);


    ModDate();

});

function DateText() {

    const dt = new Date();

    text.innerHTML = dt;
}


DateText();
*/



const button = document.querySelector("#save");

button.addEventListener('click', () => {
    const datadapublicacao = document.querySelector("#datadapublicacao").value;
    const cj = document.querySelector("#caixa-jud");
    const cp = document.querySelector("#caixa-prazo");

    function FormDate() {
        const dt = new Date(datadapublicacao);
        const number = cj.value;

        const valueDate = number * 24 * 60 * 60 * 1000;

        const dateForm = new Date(dt.getTime() + valueDate);

        const day = dateForm.getDate();
        const month = dateForm.getMonth();
        const year = dateForm.getFullYear();

        let dayFormatted = day < 10 ? `0${day}` : day;
        let monthFormatted = (month + 1) < 10 ? `0${month + 1}` : month + 1;

        let dateFormFinal = `${dayFormatted} / ${monthFormatted} / ${year}`;

        cp.value = dateFormFinal;
    }

    FormDate();

});








    


