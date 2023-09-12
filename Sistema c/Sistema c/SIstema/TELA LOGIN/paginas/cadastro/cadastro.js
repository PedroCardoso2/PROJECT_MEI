var valorInput = document.getElementById('valormulta');
var valorLimite = document.getElementById('valormultalimite');

        // Formatando o valor enquanto digita
        valorInput.addEventListener('input', function() {

            var valor = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            var formattedValue = formatCurrency(valor); // Formata o valor
            this.value = formattedValue;

        });

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

        
//Evento para mostrar nova triagem e esconder as demais div's
const botaoMostrarDiv = document.getElementById("botaonovocadastro");
const minhaDiv = document.getElementById("f-conteiner");        


botaoMostrarDiv.addEventListener("click", function() {
    if (minhaDiv.style.display === "none") {
        minhaDiv.style.display = "block";
    } else {
        minhaDiv.style.display = "none";
    }
    var formulario = document.getElementById('grid-form');

    formulario.reset();
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


  function formatarCampoprocesso() {
    var campoprocesso = document.getElementById("ndoprocesso");
    
    
    if (campoprocesso) {
      
      var valorCampoprocesso = campoprocesso.value;
      
      
      valorCampoprocesso = valorCampoprocesso.replace(/[^\d]/g, '');
      
      
      valorCampoprocesso = valorCampoprocesso.slice(0, 20);
      
      
      valorCampoprocesso = valorCampoprocesso.replace(/(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/, '$1-$2.$3.$4.$5.$6');
      
      
      campoprocesso.value = valorCampoprocesso;
    }
  }
  
  
  var campoprocesso = document.getElementById("ndoprocesso");
  if (campoprocesso) {
    campoprocesso.addEventListener("input", formatarCampoprocesso);
  }
 

  


// CPF
document.addEventListener("DOMContentLoaded", function () {
    const campo = document.getElementById("cpf");

    campo.addEventListener("input", function () {
        let value = campo.value.replace(/\D/g, '');
        if (value.length === 11) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else if (value.length === 14) {
            value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'); //
        }
        campo.value = value;
    });
});


var editMode = false;

 

//Armazenar os dados no localStorage

function salvarOuAtualizarCadastro(){

    const ndoProcesso = document.getElementById("ndoprocesso").value;
    const cpf = document.getElementById("cpf").value;
    const uc = document.getElementById("uc").value;
    const municipio = document.getElementById("municipio").value;
    const tipovara = document.getElementById("tipovara").value;
    const datachegada = document.getElementById("datachegada").value;
    const datatratadotriagem = document.getElementById("datatratadotriagem").value;
    const tipoJus = document.getElementById("tipoJus").value;
    const autor = document.getElementById("autor").value;
    const objetoespecifico = document.getElementById("objetoespecifico").value;
    const detalhe = document.getElementById("detalhe").value;
    const serie = document.getElementById("serie").value;
    const hashtag = document.getElementById("hashtag").value;
    const agregado = document.getElementById("agregado").value;
    const datafato = document.getElementById("datafato").value;
    const situacaoliminar = document.getElementById("situacaoliminar").value;
    const situacaoprocessual = document.getElementById("situacaoprocessual").value;
    const obrigacaodefazer = document.getElementById("obrigacaodefazer").value;
    const valormulta = document.getElementById("valormulta").value;
    const valormultalimite = document.getElementById("valormultalimite").value;
    const tipodemulta = document.getElementById("tipodemulta").value;
    const determinacaoJud = document.getElementById("determinacaoJud").value;
    const prazoFatal = document.getElementById("prazoFatal").value;

    const responsavel = document.getElementById("responsavel").value;      

   

    const data = {

        ndoProcesso: ndoProcesso,

        cpf: cpf,

        uc: uc,

        municipio: municipio,

        tipovara: tipovara,

        datachegada: datachegada,

        datatratadotriagem: datatratadotriagem,

        tipoJus: tipoJus,

        autor: autor,

        objetoespecifico: objetoespecifico,

        detalhe: detalhe,

        serie: serie,

        hashtag: hashtag,

        agregado: agregado,

        datafato: datafato,

        situacaoliminar: situacaoliminar,

        situacaoprocessual: situacaoprocessual,

        obrigacaodefazer: obrigacaodefazer,

        valormulta: valormulta,

        valormultalimite: valormultalimite,

        tipodemulta: tipodemulta,

        determinacaoJud: determinacaoJud,

        prazoFatal: prazoFatal,

        responsavel: responsavel

    };

 

   

        if(cpf === ''){

   

            alert ('Por Favor, preencha o campo CPF.');

   

            

            return false

   

        }   else if (objetoespecifico === ''){

   

            alert ('Por Favor, preencha o campo Objeto Específico.');

   

            

                return false

           

        }  

   

            else if (datachegada === ''){

 

            alert ('Por Favor, preencha o campo Data Chegada.');

 

            

                return false

 

            }

 

            else if (detalhe === ''){

 

            alert ('Por Favor, preencha o campo Detalhe.');

 

            

                return false

 

            }

 

            else if (serie === ''){

 

            alert ('Por Favor, preencha o campo Série.')

 

            

                return false

 

            }

 

            else if (hashtag === ''){

 

            alert ('Por Favor, preencha o campo Hashtag.')

 

            

                return false

 

            }

 

            else if (agregado === ''){

 

            alert ('Por Favor, preencha o campo Agregado.')

 

            

                return false

 

            }

 

        else{

   
            const storedData = JSON.parse(localStorage.getItem("dadosTriagem")) || [];

            const existingDataIndex = storedData.findIndex(item => item.ndoProcesso === ndoProcesso);
    
            if (existingDataIndex !== -1) {
                // Atualiza o registro existente com os novos valores
                storedData[existingDataIndex] = data;
            } else {
                // Adiciona um novo registro
                storedData.push(data);
            }
        
            localStorage.setItem("dadosTriagem", JSON.stringify(storedData));
            alert("Salvo com sucesso!");
            bloquearCampos();
           

   

   

   

        }

   

   

        
    }
    
    document.getElementById('salvar').addEventListener('click', function (event) {
        event.preventDefault();
        salvarOuAtualizarCadastro();

        

       

    });

 

    document.getElementById("buttonConsultar").addEventListener("click",  function(e) {

    e.preventDefault();

    const processoConsultado = document.getElementById("ndoprocesso").value

    const storedData = JSON.parse(localStorage.getItem("dadosTriagem")) || [];

 

    if (!processoConsultado) {

        alert('Por Favor, preencha o campo Nº do Processo para consultar.');

        return;

    }

    const foundData = storedData.find(item => item.ndoProcesso === processoConsultado);

    if (foundData) {

        alert("Processo existente no Banco de Dados!")

        document.getElementById("ndoprocesso").value = foundData.ndoProcesso

        document.getElementById("cpf").value = foundData.cpf

        document.getElementById("uc").value = foundData.uc

        document.getElementById("municipio").value = foundData.municipio

        document.getElementById("tipovara").value = foundData.tipovara

        document.getElementById("datachegada").value = foundData.datachegada

        document.getElementById("datatratadotriagem").value = foundData.datatratadotriagem

        document.getElementById("tipoJus").value = foundData.tipoJus

        document.getElementById("autor").value = foundData.autor

        document.getElementById("objetoespecifico").value = foundData.objetoespecifico

        document.getElementById("detalhe").value = foundData.detalhe

        document.getElementById("serie").value = foundData.serie

        document.getElementById("hashtag").value = foundData.hashtag

        document.getElementById("agregado").value = foundData.agregado

        document.getElementById("datafato").value = foundData.datafato

        document.getElementById("situacaoliminar").value = foundData.situacaoliminar

        document.getElementById("situacaoprocessual").value = foundData.situacaoprocessual

        document.getElementById("obrigacaodefazer").value = foundData.obrigacaodefazer

        document.getElementById("valormulta").value = foundData.valormulta

        document.getElementById("valormultalimite").value = foundData.valormultalimite

        document.getElementById("tipodemulta").value = foundData.tipodemulta

        document.getElementById("determinacaoJud").value = foundData.determinacaoJud

        document.getElementById("prazoFatal").value = foundData.prazoFatal

        document.getElementById("responsavel").value = foundData.responsavel

 

        // Bloqueia a edição dos campos preenchidos automaticamente

        bloquearCampos();

    } else {

        alert("Nº do Processo não encontrado no Banco de Dados!")

    }

});

 

document.getElementById("editar").addEventListener("click", function() {

    // Ativa o modo de edição

    editMode = true;

    // Libera a edição dos campos

    liberarCampos();

});

 

function bloquearCampos() {

    var inputs = document.querySelectorAll("input");

    var selects = document.querySelectorAll("select");

    for (var i = 0; i < inputs.length; i++) {

        inputs[i].readOnly = true;

 

    }

   

    for (var i = 0; i < selects.length; i++) {

        selects[i].disabled = true;

    }

    document.getElementById("editar").style.display = "block";

}

 

function liberarCampos() {
    var inputs = document.querySelectorAll("input");
    var selects = document.querySelectorAll("select");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].readOnly = false;
    }
    for (var i = 0; i < selects.length; i++) {
        selects[i].disabled = false;
    }
}

 

 
function restaurarEstiloCampos() {
    var inputs = document.querySelectorAll("input");
    var selects = document.querySelectorAll("select");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "white"; // Restaura o estilo padrão
    }
    for (var i = 0; i < selects.length; i++) {
        selects[i].style.backgroundColor = "white"; // Restaura o estilo padrão
    }
}

document.getElementById("botaonovocadastro").addEventListener("click", function () {
    liberarCampos();
});



const text = document.querySelector("#text-date")
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
        min = min`0${min}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }

    const dateConteiner = `${day} / ${mon} / ${years} | ${hours}:${min}:${sec}`;

    text.innerHTML = dateConteiner;

});




