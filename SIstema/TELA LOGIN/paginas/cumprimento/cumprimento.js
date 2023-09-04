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

        
const botaoMostrarDiv = document.getElementById("botaonovocumprimento");
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
 const campos = document.querySelectorAll("input, select, textarea");

 campos.forEach((campo, index) => {
     campo.addEventListener("keydown", function (event) {
         if (event.key === "Enter" && index < campos.length - 1) {
             event.preventDefault();
             campos[index + 1].focus();
         }
     });
 });


// Adicione um ouvinte de evento ao botão "Salvar"
document.getElementById("salvar").addEventListener("click", function () {
    // Captura os valores do formulário
    const ndoprocesso = document.getElementById("ndoprocesso").value;
    const datadapublicacao = document.getElementById("datadapublicacao").value;
    const datadobcc = document.getElementById("datadobcc").value;
    const datadoingresso = document.getElementById("datadoingresso").value;
    const escritoriotriagem = document.getElementById("escritoriotriagem").value;
    const emailsalesforce = document.getElementById("emailsalesforce").value;
    const cpfcnpj = document.getElementById("cpfcnpj").value;
    const autor = document.getElementById("autor").value;
    const pontodefornecimento = document.getElementById("pontodefornecimento").value;
    const municipio = document.getElementById("municipio").value;
    const tipodedecisao = document.getElementById("tipodedecisao").value;
    const procedimento = document.getElementById("procedimento").value;
    const diretoriaacao = document.getElementById("diretoriaacao").value;
    const objetoespecifico = document.getElementById("objetoespecifico").value;

    // Recupera os dados existentes do Local Storage, se houver
    const dadosArmazenados = localStorage.getItem("dadosFormulario");
    const dados = dadosArmazenados ? JSON.parse(dadosArmazenados) : [];

    // Adiciona os novos valores ao array de dados
    dados.push({
        ndoprocesso: ndoprocesso,
        datadapublicacao: datadapublicacao,
        datadobcc: datadobcc,
        datadoingresso: datadoingresso,
        escritoriotriagem: escritoriotriagem,
        emailsalesforce: emailsalesforce,
        cpfcnpj: cpfcnpj,
        autor: autor,
        pontodefornecimento: pontodefornecimento,
        municipio: municipio,
        tipodedecisao: tipodedecisao,
        procedimento: procedimento,
        diretoriaacao: diretoriaacao,
        

    });

    // Armazena o array atualizado no Local Storage
    localStorage.setItem("dadosFormulario", JSON.stringify(dados));

    alert("Dados do formulário adicionados ao Local Storage!");
})


document.addEventListener("DOMContentLoaded", function() {
    const cpfCnpjInput = document.getElementById("cpfCnpjInput");
    
    cpfCnpjInput.addEventListener("input", function() {
      let value = cpfCnpjInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
      if (value.length === 11) { // Se tiver 11 dígitos, é um CPF
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Formato de CPF
      } else if (value.length === 14) { // Se tiver 14 dígitos, é um CNPJ
        value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'); // Formato de CNPJ
      }
      cpfCnpjInput.value = value;
    });
  });






