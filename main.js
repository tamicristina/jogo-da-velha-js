//const containerJogo = document.querySelector(".tabuleiro");
//const containerEspaco = document.querySelector(".container");
//Pegando as div do HTML
let espacos = document.querySelectorAll(
  ".espaço1,.espaço2,.espaço,.espaço4,.espaço5,.espaço6,.espaço7,.espaço8,.espaço9"
);

function jogar() {
  let jogador = true;
  for (let espaco of espacos) {
    espaco.addEventListener("click", function () {
      if (espaco.innerHTML === "") {
        if (jogador) {
          const imgO = document.createElement("img");
          espaco.setAttribute("id", "imgo");
          imgO.setAttribute("class", "imgo");
          imgO.src = "./imagens/02.png";
          espaco.appendChild(imgO);
          jogador = false;
          jogo();
        } else if (!jogador) {
          const imgX = document.createElement("img");
          espaco.setAttribute("id", "imgx");
          imgX.setAttribute("class", "imgx");
          imgX.src = "./imagens/X.png";
          espaco.appendChild(imgX);
          jogador = true;
          jogo();
        }
      }
    });
  }
}

function jogo() {
  let jogadorO = document.getElementById("imgo");
  let jogadorX = document.getElementById("imgx");

  for (var i = 0; i < espacos.length; i++) {
    var o = [];
    if (jogadorO == espacos[i]) {
      //aqui vou colocar um objeto pra receber uma key recebendo o tipo da img e o value com o index da posição
      //pra teste

      console.log(espacos[i]); // vai ser a key
      console.log(i); //vai ser o value
      console.log("esse  é O");
    } else if (testx == espacos[i]) {
      console.log(espacos[i]);
      console.log(i);
      console.log("Aquie é o X");
    }
  }
  // if (jogadorO == espacos[0]) {
  //   console.log("Ok");
  // } else if (espacos[2] === jogadorX) {
  //   console.log("não foi");
  // }
  // console.log(espacos[0]);
}

jogar();
