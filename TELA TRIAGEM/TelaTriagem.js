const botaoMostrarDiv = document.getElementById("button-submit");
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



function formatarMoeda() {
    var elemento = document.getElementById('valor');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if (valor == 'NaN') elemento.value = '';
}
