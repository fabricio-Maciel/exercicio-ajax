document.addEventListener("DOMContentLoaded", function () {
  const url = "https://api.github.com/users/fabricio-Maciel";
  const nome = document.querySelector("#nome");
  const userName = document.querySelector("#userName");
  const avatar = document.querySelector("#avatar");
  const repositorio = document.querySelector("#repositorios");
  const seguidores = document.querySelector("#seguidores");
  const seguindo = document.querySelector("#seguindo");

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      nome.innerText = json.name;
      userName.innerText = json.login;
      avatar.src = json.avatar_url;
      repositorio.innerText = json.public_repos;
      seguidores.innerText = json.followers;
      seguindo.innerText = json.following;
    })
    .catch((erro) => {
      alert("Ocorreu um erro!");
    });
});
