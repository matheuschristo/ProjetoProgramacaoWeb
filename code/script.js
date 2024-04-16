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
  var button = document.getElementById("button-autenticado");

  if (localStorage.getItem("username") != null) {
    userAutenticado.innerText = "Olá " + localStorage.getItem("username");
    userAutenticado.style.color = 'white'
    button.style.backgroundColor = 'transparent'
    button.style.border = 'none'
    button.style.width = 'auto'
  } else {
    userAutenticado.innerText = "Usuario nao autenticado";
  }
}

function mudarPage() {
  window.location.href = "cadastro.html";
}

function mudarParaIndex() {
  window.location.href = "index.html"
}

function alteraEstilo(estilo) {
  const body = document.body;

  if (estilo === "custom") {
    body.classList.add("custom");
  } else {
    body.classList.remove("custom");
  }
}
