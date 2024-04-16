document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    if (username !== "" && password !== "") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("authenticated", "true");
      window.location.href = "index.html";


    } else {
      alert("Informe os dados de autenticação");
    }
  });

function verificaAutenticado() {
  var userAutenticado = document.getElementById("userAutenticado");

  if (localStorage.getItem("username") != null) {
    userAutenticado.innerText = localStorage.getItem("username");
  } else {
    userAutenticado.innerText = "Usuario nao autenticado"
  }
}

function mudarPage() {
  window.location.href = "cadastro.html";
}