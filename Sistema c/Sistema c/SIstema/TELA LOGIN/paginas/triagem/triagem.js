const campos = document.querySelectorAll("input, select, textarea");



campos.forEach((campo, index) => {
    
    campo.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && index < campos.length - 1) {
            event.preventDefault();
            campos[index + 1].focus();
        }
    });
})


//campo da Hora

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
        
        //Aqui
        
        
        //Evento para mostrar nova triagem e esconder as demais div's
        const botaoMostrarDiv = document.getElementById("botaonovatriagem");
        const minhaDiv = document.getElementById("f-container");        

        
botaoMostrarDiv.addEventListener("click", function() {
    if (minhaDiv.style.display === "none") {
        minhaDiv.style.display = "block";
        minhaDiv2.style.display = "none";
    } else {
        minhaDiv.style.display = "none";
    }
});


//Evento para mostrar a div de pesquisar processo e esconder as demais div's
const pesquisarProcesso = document.getElementById("pesquisarProcesso")
const minhaDiv2 = document.getElementById("f-container2")


pesquisarProcesso.addEventListener("click", function() {
    if (minhaDiv2.style.display === "none"){
        minhaDiv2.style.display = "block"
        minhaDiv.style.display = "block"
    } else {
        minhaDiv2.style.display = "none"
    }
})

//Para recuperar dados


//Armazenar os dados no localStorage
function salvarTriagem() {
    
    
    const ndoProcesso = document.getElementById("ndoprocesso").value;
    const dataPubli = document.getElementById("datadapublicacao").value;
    const recebidoPor = document.getElementById("recebidoPor").value;
    const tipoJus = document.getElementById("tipoJus").value;
    const autor = document.getElementById("autor").value;
    const situacaoLiminar = document.getElementById("situacaoliminar").value;
    const obrigacaoFazer = document.getElementById("obrigacaoFazer").value;
    const valormulta = document.getElementById("valormulta").value;
    const valormultalimite = document.getElementById("valormultalimite").value;
    const tipoMulta = document.getElementById("caixa-multa").value;
    const determinacaoJud = document.getElementById("determinacaoJud").value;
    const prazoFatal = document.getElementById("prazoFatal").value;
    const descObrigacao = document.getElementById("descObrigacao").value;
            
                
    const data = {
        ndoProcesso: ndoProcesso,
        dataPubli: dataPubli,
        recebidoPor: recebidoPor,
        tipoJus: tipoJus,
        autor: autor,
        situacaoLiminar: situacaoLiminar,
        obrigacaoFazer: obrigacaoFazer,
        valormulta: valormulta,
        valormultalimite: valormultalimite,
        tipoMulta: tipoMulta,
        determinacaoJud: determinacaoJud,
        prazoFatal: prazoFatal,
        descObrigacao: descObrigacao
    };

    const storedData = JSON.parse(localStorage.getItem("dadosTriagem")) || [];
    storedData.push(data);

    localStorage.setItem("dadosTriagem", JSON.stringify(storedData));
            
    alert("Dados salvos no LocalStorage!");
}

document.getElementById("buttonConsultar").addEventListener("click",  function(e) {
    e.preventDefault();
    const processoConsultado = document.getElementById("consultaProcesso").value
    const storedData = JSON.parse(localStorage.getItem("dadosTriagem")) || [];

    const foundData = storedData.find(data => data.ndoProcesso === processoConsultado);

    if (foundData) {
        alert("Processo existente no Banco de Dados!")
        document.getElementById("ndoprocesso").value = foundData.ndoProcesso
        document.getElementById("datadapublicacao").value = foundData.dataPubli
        document.getElementById("recebidoPor").value = foundData.recebidoPor
        document.getElementById("tipoJus").value = foundData.tipoJus
        document.getElementById("autor").value = foundData.autor
        document.getElementById("situacaoliminar").value = foundData.situacaoLiminar
        document.getElementById("obrigacaoFazer").value = foundData.obrigacaoFazer
        document.getElementById("valormulta").value = foundData.valormulta
        document.getElementById("valormultalimite").value = foundData.valormultalimite
        document.getElementById("caixa-multa").value = foundData.tipoMulta
        document.getElementById("determinacaoJud").value = foundData.determinacaoJud
        document.getElementById("prazoFatal").value = foundData.prazoFatal
        document.getElementById("descObrigacao").value = foundData.descObrigacao
    } else {
        alert("Processo não encontrado no Banco de Dados!")
    }
});

/*document.getElementById("buttonEditar").addEventListener("click", function(e) {
    e.preventDefault();
    const processoConsultado = document.getElementById("consultaProcesso").value
    const storedData = JSON.parse(localStorage.getItem("dadosTriagem")) || [];

    const foundData = storedData.find(data => data.ndoProcesso === processoConsultado);

    if(foundData) {
        document.getElementById("autor").value = foundData.autor
        document.getElementById("valormultalimite").value = foundData.valormultalimite
    }
})*/