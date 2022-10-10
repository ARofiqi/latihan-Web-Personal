const opt = ["KERTAS", "GUNTING", "BATU"];
let pOpt;

function finals() {
  let bot = Math.floor(Math.random() * 3);
  let botOpt = opt[bot];

  const textHasil = document.querySelector(".hasil p");
  const scoreGkb = document.querySelectorAll(".score-gkb p span");

  let hasil;
  if (botOpt == pOpt) {
    hasil = "SERI";
  } else if (botOpt == "KERTAS" && pOpt == "GUNTING") {
    hasil = "MENANG";
  } else if (botOpt == "GUNTING" && pOpt == "BATU") {
    hasil = "MENANG";
  } else if (botOpt == "BATU" && pOpt == "KERTAS") {
    hasil = "MENANG";
  } else {
    hasil = "KALAH";
  }

  switch (hasil) {
    case "SERI":
      textHasil.setAttribute("class", "seri");
      scoreGkb[2].textContent++;
      break;
    case "MENANG":
      textHasil.setAttribute("class", "menang");
      scoreGkb[0].textContent++;
      break;
    case "KALAH":
      textHasil.setAttribute("class", "kalah");
      scoreGkb[1].textContent++;
      break;
  }

  document.querySelector(".bot-option p").textContent = botOpt;
  textHasil.textContent = hasil;

  button.forEach((b) => b.removeAttribute("id", "bt"));
}

const player = document.querySelectorAll(".player-option div p");
player.forEach((p) => {
  p.addEventListener("click", function () {
    pOpt = p.textContent;
    finals();
  });
});

const button = document.querySelectorAll(".box-opt p");
button.forEach((b) => {
  b.addEventListener("click", function () {
    b.setAttribute("id", "bt");
  });
});

// Tebak Angka
const boxNumber = document.querySelector(".munculAngka");
const hpPlayer = document.querySelectorAll(".hp-player div");
const scoreTebakAngka = document.querySelectorAll(".score-tebak-angka p span");
let numBot = Math.floor(Math.random() * 10) + 1;
let hp = 3;


function getAngkaTebakan() {
  let angka = document.querySelector(".kotak-tebak input").value;
  hp -= 1;

  if (hp > 0 && hp < 4) {
    if (angka == numBot) {
      boxNumber.textContent = "anda menang";
      numBot = Math.floor(Math.random() * 10) + 1;
      hp = 3;
    } else if (angka < numBot) {
      boxNumber.textContent = "Angka yang Anda masukan terlalu kecil";
    } else if (angka > numBot) {
      boxNumber.textContent = "Angka yang Anda masukan terlalu besar";
    }
  } else {
    if (angka == numBot) {
      boxNumber.textContent = "anda menang";
    } else {
      boxNumber.textContent = "anda kalah";
    }
    numBot = Math.floor(Math.random() * 10) + 1;
    hp = 3;
  }

  switch (hp) {
    case 3:
      hpPlayer.forEach((p) => {
        p.style.backgroundImage = "url(hp.png)";
      });
      break;
    case 2:
      hpPlayer[0].style.backgroundImage = "url(hp-none.png)";
      break;
    case 1:
      hpPlayer[1].style.backgroundImage = "url(hp-none.png)";
      break;
    case 0:
      hpPlayer[2].style.backgroundImage = "url(hp-none.png)";
      break;
  }

  setTimeout(() => {
    boxNumber.textContent = "MASUKAN ANGKA 1 - 10";
  }, 2000);
}
