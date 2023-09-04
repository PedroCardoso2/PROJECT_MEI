var valorInput = document.getElementById('valormulta');

        // Formatando o valor enquanto digita
        valorInput.addEventListener('input', function() {
            var valor = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            var formattedValue = formatCurrency(valor); // Formata o valor
            this.value = formattedValue;
        });

        // Função para formatar o número como moeda
        function formatCurrency(value) {
            if (value === '') {
                return '';
            }

            var number = parseFloat(value) / 100; // Divide por 100 para adicionar as casas decimais
            return 'R$ ' + number.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        }

var valorLimite = document.getElementById('valormultalimite');

        // Formatando o valor enquanto digita
        valorLimite.addEventListener('input', function() {
            var valor = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            var formattedValue = formatCurrency(valor); // Formata o valor
            this.value = formattedValue;
        });

        // Função para formatar o número como moeda
        function formatCurrency(value) {
            if (value === '') {
                return '';
            }

            var number = parseFloat(value) / 100; // Divide por 100 para adicionar as casas decimais
            return 'R$ ' + number.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        }

        
const botaoMostrarDiv = document.getElementById("botaonovocadastro");
const minhaDiv = document.getElementById("f-conteiner");
        
botaoMostrarDiv.addEventListener("click", function() {
// Verifica se a div está escondida
    if (minhaDiv.style.display === "none") {
// Se estiver escondida, mostra-a
        minhaDiv.style.display = "block";
    } else {
// Se não estiver escondida, esconde-a
        minhaDiv.style.display = "none";
    }
});

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



/* Modificações do Pedro Cardoso*/
const text = document.querySelector("#text-date");

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
const inputValorMulta = document.querySelector("#valormulta");
const inputValorMultaLimite = document.querySelector("#valormultalimite");
const selectTipoMulta = document.querySelector("#caixatipomulta");
const inputDeterminacaoJudicial = document.querySelector("#determinacaojudicial");
const inputDataPrazoFatal = document.querySelector("#dataprazofatal");
const inputResponsavel = document.querySelector("#responsavel");



const numeroProcesso = inputNumeroProcesso.value;
