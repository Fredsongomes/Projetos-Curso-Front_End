const html = document.querySelector("html");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const iniciarOuPausarBt = document.querySelector("#start-pause span");
const iniciarOuPausarBtIcone = document.querySelector(
  ".app__card-primary-butto-icon",);

const tempoNaTela = document.querySelector("#timer");

const musica = new Audio("sons/luna-rise-part-one.mp3");
const audioPlay = new Audio("sons/play.wav");
const audioPausa = new Audio("sons/pause.mp3");
const audioTempoFinalizado = new Audio("sons/beep.mp3");

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musica.loop = true;

const actions = {
  "selecionar-foco": (evento, alvo) => selecionarContexto("foco", 1500, alvo),
  "selecionar-descanso-curto": (evento, alvo) =>
    selecionarContexto("descanso-curto", 300, alvo),
  "selecionar-descanso-longo": (evento, alvo) =>
    selecionarContexto("descanso-longo", 900, alvo),
  "iniciar-pausar": iniciarOuPausar,
  "alternar-musica": () => {
    if (musica.paused) {
      musica.play();
    } else {
      musica.pause();
    }
  },
};

document.addEventListener("click", (evento) => {
  const alvo = evento.target.closest("[data-action]");
  if (!alvo) return;
  const handler = actions[alvo.dataset.action];
  if (handler) handler(evento, alvo);
});

function selecionarContexto(contexto, duracao, botao) {
  tempoDecorridoEmSegundos = duracao;
  alterarContexto(contexto);
  botao.classList.add("active");
}

function alterarContexto(contexto) {
  mostrarTempo();
  botoes.forEach(function (contexto) {
    contexto.classList.remove("active");
  });
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `image/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
      break;
    case "descanso-curto":
      titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `;
      break;
    case "descanso-longo":
      titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `;
      break;
    default:
      break;
  }
}

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    audioTempoFinalizado.play();
    alert("Tempo finalizado!");
    const focoAtivo = html.getAttribute("data-contexto") == "foco";
    if (focoAtivo) {
      const evento = new CustomEvent("FocoFinalizado");
      document.dispatchEvent(evento);
    }
    zerar();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  mostrarTempo();
};

function iniciarOuPausar() {
  if (intervaloId) {
    audioPausa.play();
    zerar();
    return;
  }
  audioPlay.play();
  intervaloId = setInterval(contagemRegressiva, 1000);
  iniciarOuPausarBt.textContent = "Pausar";
  iniciarOuPausarBtIcone.setAttribute("src", "image/pause.png");
}

function zerar() {
  clearInterval(intervaloId);
  iniciarOuPausarBt.textContent = "Começar";
  iniciarOuPausarBtIcone.setAttribute("src", `image/play_arrow.png`);
  intervaloId = null;
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-Br", {
    minute: "2-digit",
    second: "2-digit",
  });
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();
