



const frm = document.querySelector("form")
const button = document.querySelector("#save");
const text = document.querySelector("#text-date");






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

const dtHr = setInterval(() => {
    const today = new Date();

    let day =  today.getDate();
    let mon = today.getMonth() + 1;
    const years = today.getFullYear();
    let hours = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    if(day < 10){
        day = `0${day}`;
    }
    if(mon < 10){
        mon = `0${mon}`;
    }
    if(mon >= 13){
        mon = 1;
    }
    if(hours < 10){
        hours = `0${hours}`;
    }
    if(min < 10){
        min = min `0${min}`;
    }
    if(sec < 10){
        sec = `0${sec}`;
    }


    const dateConteiner = `${day} / ${mon} / ${years} | ${hours}:${min}:${sec}`;


    text.innerHTML = dateConteiner;

});

const campos = document.querySelectorAll("input, select, textarea");

campos.forEach((campo, index) => {
    campo.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && index < campos.length - 1) {
            event.preventDefault();
            campos[index + 1].focus();
        }
    });
});










    


