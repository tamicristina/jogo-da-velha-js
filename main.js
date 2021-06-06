const containerJogo = document.querySelector(".tabuleiro");
const containerEspaco = document.querySelector(".container");
let espacos = document.querySelectorAll(
  ".espaço1,.espaço2,.espaço,.espaço4,.espaço5,.espaço6,.espaço7,.espaço8,.espaço9"
);
// console.log(espacos);

function jogar() {
  let jogador = true;
  for (let espaco of espacos) {
    espaco.addEventListener("click", function () {
      if (espaco.innerHTML === "") {
        if (jogador) {
          const imgO = document.createElement("img");
          imgO.setAttribute("class", "imgo");
          imgO.src = "./imagens/02.png";
          espaco.appendChild(imgO);

          console.log(espaco);
          jogador = false;
        } else if (!jogador) {
          const imgX = document.createElement("img");
          imgX.setAttribute("class", "imgx");
          imgX.src = "./imagens/X.png";
          espaco.appendChild(imgX);
          console.log(espaco);
          jogador = true;
        }
      }
    });
  }
}

jogar();

// for (let espaco of espacos) {
//     console.log(espaco);
//     espaco.addEventListener("click", function () {
//       if (contador % 2 === 0) {
//         espaco.appendChild(imgO);
//       } else if (contador % 2 == 1) {
//         espaco.appendChild(imgX);
//         contador++;
//       }
//     });

// for (let i = 0; i < espacos.length; i++) {
//   espacos.addEventListener("click", function () {
//     espacos.appendChild(imgO);
//   });
//   // espacos.addEventListener("click", function () {
//   //   espacos.appendChild(imgX);
//   // });

//   console.log(espacos[i]);
// if (contador % 2 === 0) {
//   espacos[i].addEventListener("click", function () {
//     espacos[contador].append(imgO);
//     contador++;
//   });
// } else if (contador % 2 === 1) {
//   espacos[i].addEventListener("click", function () {
//     espacos[contador].append(imgX);
//     contador++;
//   });
// }
