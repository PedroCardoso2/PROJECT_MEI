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

        
const botaoMostrarDiv = document.getElementById("botaonovatriagem");
const minhaDiv = document.getElementById("f-container");
        
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
document.getElementById("salvarDados").addEventListener("click", function () {
    // Captura os valores do formulário
    const ndoprocesso = document.getElementById("ndoprocesso").value;
    const autor = document.getElementById("autor").value;

    // Recupera os dados existentes do Local Storage, se houver
    const dadosArmazenados = localStorage.getItem("dadosFormulario");
    const dados = dadosArmazenados ? JSON.parse(dadosArmazenados) : [];

    // Adiciona os novos valores ao array de dados
    dados.push({
        nome: ndoprocesso,
        autor: autor
    });

    // Armazena o array atualizado no Local Storage
    localStorage.setItem("dadosFormulario", JSON.stringify(dados));

    alert("Dados do formulário adicionados ao Local Storage!");
})