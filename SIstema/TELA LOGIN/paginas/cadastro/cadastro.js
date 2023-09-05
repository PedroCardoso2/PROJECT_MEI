

const inputNumeroProcesso = document.querySelector("#ndoprocesso");
const inputCPF = document.querySelector("#cpf");
const inputUC = document.querySelector("#uc");
const inputMunicipio = document.querySelector("#municipio");
const inputTipoVara = document.querySelector("#tipovara");
const inputDataChegada = document.querySelector("#datachegada");
const inputDataTratadoTriagem = document.querySelector("#datatratadotriagem");
const selectTipoJustica = document.querySelector("#caixatipojustica");
const inputAutor = document.querySelector("#autor");
const inputObjetoEspecifico = document.querySelector("#objetoespecifico");
const inputDetalhe = document.querySelector("#detalhe");
const inputSerie = document.querySelector("#serie");
const inputHashtag = document.querySelector("#hashtag");
const inputAgregado = document.querySelector("#agregado");
const inputDataFato = document.querySelector("#datafato");
const inputSituacaoLiminar = document.querySelector("#situacaoliminar");
const inputSituacaoProcessual = document.querySelector("#situacaoprocessual");
const inputObrigacaoFazer = document.querySelector("#obrigacaodefazer");
const inputValorMulta = document.querySelector("#caixatipomulta");
const inputValorMultaLimite = document.querySelector("#valormultalimite");
const selectTipoMulta = document.querySelector("#caixatipomulta");
const inputDeterminacaoJudicial = document.querySelector("#determinacaojudicial");
const inputDataPrazoFatal = document.querySelector("#dataprazofatal");
const inputResponsavel = document.querySelector("#responsavel");

const saveButton = document.querySelector(".save-button");

// Função para formatar o número como moeda
function formatCurrency(value) {
    if (value === '') {
        return '';
    }

    const number = parseFloat(value) / 100; // Divide por 100 para adicionar as casas decimais
    return 'R$ ' + number.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
};



// Adicione um ouvinte de evento a todos os campos de entrada
const campos = document.querySelectorAll("input, select");

campos.forEach((campo, index) => {
    campo.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && index < campos.length - 1) {
            event.preventDefault();
            campos[index + 1].focus();
        }
    });
});

// Função para mostrar/ocultar a div
const botaoMostrarDiv = document.getElementById("botaonovocadastro");
const minhaDiv = document.getElementById("f-conteiner");

botaoMostrarDiv.addEventListener("click", function () {
    if (minhaDiv.style.display === "none") {
        minhaDiv.style.display = "block";
    } else {
        minhaDiv.style.display = "none";
        campos.forEach((campo) => {
            campo.value = "";
        });
    }


});


/* MODIFICAÇÕES DO PEDRO CARDOSO */

function verficaValor(formulario) {
    for (let chave in formulario) {
        if (chave === null || chave === "") {
            return true;
        }
    }

    return false;
}



// Formatando os campos de valor enquanto digita
const valorInput = document.getElementById('valormulta');
const valorLimite = document.getElementById('valormultalimite');

function formatValorInput(input) {
    input.addEventListener('input', function () {
        const valor = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        const formattedValue = formatCurrency(valor); // Formata o valor
        this.value = formattedValue;
    });
}

formatValorInput(valorInput);
formatValorInput(valorLimite);

// Obtendo a data atual
const text = document.querySelector("#text-date");

const dtHr = setInterval(() => {
    const today = new Date();

    let day = today.getDate();
    let mon = today.getMonth() + 1;
    const years = today.getFullYear();
    let hours = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    if (day < 10) {
        day = `0${day}`;
    }
    if (mon < 10) {
        mon = `0${mon}`;
    }
    if (mon >= 13) {
        mon = 1;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }

    const dateConteiner = `${day} / ${mon} / ${years} | ${hours}:${min}:${sec}`;

    text.innerHTML = dateConteiner;
}, 1000);

// Adicione um ouvinte de evento para salvar os dados no localStorage
saveButton.addEventListener("click", (e) => {
    const formulario = {
        numeroProcesso: inputNumeroProcesso.value,
        cpf: inputCPF.value,
        uc: inputUC.value,
        municipio: inputMunicipio.value,
        tipoVara: inputTipoVara.value,
        dataChegada: inputDataChegada.value,
        dataTratadoTriagem: inputDataTratadoTriagem.value,
        tipoJustica: selectTipoJustica.value,
        autor: inputAutor.value,
        objetoEspecifico: inputObjetoEspecifico.value,
        detalhe: inputDetalhe.value,
        serie: inputSerie.value,
        hashtag: inputHashtag.value,
        agregado: inputAgregado.value,
        dataFato: inputDataFato.value,
        situacaoLiminar: inputSituacaoLiminar.value,
        situacaoProcessual: inputSituacaoProcessual.value,
        obrigacaoFazer: inputObrigacaoFazer.value,
        valorMulta: inputValorMulta.value,
        valorMultaLimite: inputValorMultaLimite.value,
        tipoMulta: selectTipoMulta.value,
        determinacaoJudicial: inputDeterminacaoJudicial.value,
        dataPrazoFatal: inputDataPrazoFatal.value,
        responsavel: inputResponsavel.value
    };

    const strgSql = JSON.stringify(formulario.tipoMulta);

    localStorage.setItem("Cadastro", strgSql);



    if (
        formulario.numeroProcesso === "" ||
        formulario.cpf === "" ||
        formulario.uc === "" ||
        formulario.municipio === "" ||
        formulario.tipoVara === "" ||
        formulario.dataChegada === "" ||
        formulario.dataTratadoTriagem === "" ||
        formulario.tipoJustica === "" ||
        formulario.autor === "" ||
        formulario.objetoEspecifico === "" ||
        formulario.detalhe === "" ||
        formulario.serie === "" ||
        formulario.hashtag === "" ||
        formulario.agregado === "" ||
        formulario.dataFato === "" ||
        formulario.situacaoLiminar === "" ||
        formulario.situacaoProcessual === "" ||
        formulario.obrigacaoFazer === "" ||
        formulario.valorMulta === "" ||
        formulario.valorMultaLimite === "" ||
        formulario.tipoMulta === "" ||
        formulario.determinacaoJudicial === "" ||
        formulario.dataPrazoFatal === "" ||
        formulario.responsavel === ""
      ) {
        alert("Preencha todos os campos obrigatórios!");
      } else {
        alert("Finalizado!");
      }
      
    

    console.log(formulario);


    e.preventDefault();
});




