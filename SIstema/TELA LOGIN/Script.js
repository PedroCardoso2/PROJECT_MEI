document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.getElementById("loginButton");

    // Função de validação do login
    loginButton.addEventListener("click", function() {
        var usernameInput = document.getElementById("username");
        var passwordInput = document.getElementById("password");
        var username = usernameInput.value;
        var password = passwordInput.value;

        // Aqui você pode adicionar sua lógica de validação do login
        if (username === "richard@adv.com" && password === "4321") {
        
            window.location.href = "paginas/home/home.html"
            // Você pode redirecionar para a página de destino ou fazer outras ações aqui
        } else {
            alert("Nome de usuário ou senha incorretos. Tente novamente.");
        }
    });
});
