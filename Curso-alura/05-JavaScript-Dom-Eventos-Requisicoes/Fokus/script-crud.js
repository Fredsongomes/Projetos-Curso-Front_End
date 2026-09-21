const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textarea = document.querySelector(".app__form-textarea");
const ulTarefas = document.querySelector(".app__section-task-list");
const paragrafoDescricaoTarefa = document.querySelector(
  ".app__section-active-task-description",
);

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

function atualizarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function fecharFormularioTarefa() {
  formAdicionarTarefa.classList.add("hidden");
  formAdicionarTarefa.setAttribute("aria-hidden", "true");
}

function obterTarefaEli(alvo) {
  const li = alvo.closest(".app__section-task-list-item");
  const id = Number(li.dataset.id);
  const tarefa = tarefas.find((tarefa) => tarefa.id === id);
  return { li, tarefa };
}

function concluirTarefa(li, tarefa) {
  if (tarefa.completa) {
    return;
  }
  tarefa.completa = true;
  li.classList.remove("app__section-task-list-item-active");
  li.classList.add("app__section-task-list-item-complete");
  li.querySelector(".app_button-edit").setAttribute("disabled", "disabled");
  if (tarefaSelecionada === tarefa) {
    paragrafoDescricaoTarefa.textContent = "";
    tarefaSelecionada = null;
    liTarefaSelecionada = null;
  }
  atualizarTarefas();
}

function editarTarefa(li, tarefa) {
  const novaDescricao = prompt("Qual é o novo nome da tarefa?");
  if (novaDescricao) {
    li.querySelector(".app__section-task-list-item-description").textContent =
      novaDescricao;
    tarefa.descricao = novaDescricao;
    if (tarefaSelecionada === tarefa) {
      paragrafoDescricaoTarefa.textContent = novaDescricao;
    }
    atualizarTarefas();
  }
}

function selecionarTarefa(li, tarefa) {
  document
    .querySelectorAll(".app__section-task-list-item-active")
    .forEach((elemento) => {
      elemento.classList.remove("app__section-task-list-item-active");
    });
  if (tarefaSelecionada == tarefa) {
    paragrafoDescricaoTarefa.textContent = "";
    tarefaSelecionada = null;
    liTarefaSelecionada = null;
    return;
  }
  tarefaSelecionada = tarefa;
  liTarefaSelecionada = li;
  paragrafoDescricaoTarefa.textContent = tarefa.descricao;
  li.classList.add("app__section-task-list-item-active");
}

function criarElementoTarefa(tarefa) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");
  li.dataset.id = tarefa.id;

  const svg = document.createElement("svg");
  svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E"></path>
        </svg>
    `;
  svg.setAttribute("data-action", "concluir-tarefa");

  const paragrafo = document.createElement("p");
  paragrafo.textContent = tarefa.descricao;
  paragrafo.classList.add("app__section-task-list-item-description");

  const botao = document.createElement("button");
  botao.classList.add("app_button-edit");
  botao.setAttribute("data-action", "editar-tarefa");

  const imagemBotao = document.createElement("img");
  imagemBotao.setAttribute("src", "image/edit.png");
  botao.append(imagemBotao);

  li.append(svg);
  li.append(paragrafo);
  li.append(botao);

  if (tarefa.completa) {
    li.classList.add("app__section-task-list-item-complete");
    botao.setAttribute("disabled", "disabled");
  } else {
    li.dataset.action = "selecionar-tarefa";
  }

  return li;
}

Object.assign(actions, {
  "alternar-form-tarefa": () => {
    const estaEscondido = formAdicionarTarefa.classList.toggle("hidden");
    formAdicionarTarefa.setAttribute("aria-hidden", String(estaEscondido));
  },
  "cancelar-tarefa": () => {
    textarea.value = "";
    fecharFormularioTarefa();
  },
  "limpar-rascunho-tarefa": () => {
    textarea.value = "";
  },
  "remover-concluidas": () => removerTarefas(true),
  "remover-todas": () => removerTarefas(false),
  "concluir-tarefa": (evento, alvo) => {
    const { li, tarefa } = obterTarefaEli(alvo);
    concluirTarefa(li, tarefa);
  },
  "editar-tarefa": (evento, alvo) => {
    const { li, tarefa } = obterTarefaEli(alvo);
    editarTarefa(li, tarefa);
  },
  "selecionar-tarefa": (evento, alvo) => {
    const { li, tarefa } = obterTarefaEli(alvo);
    selecionarTarefa(li, tarefa);
  },
});

formAdicionarTarefa.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const tarefa = {
    id: Date.now(),
    descricao: textarea.value,
  };
  tarefas.push(tarefa);
  const elementoTarefa = criarElementoTarefa(tarefa);
  ulTarefas.append(elementoTarefa);
  atualizarTarefas();
  textarea.value = "";
  fecharFormularioTarefa();
});

tarefas.forEach((tarefa) => {
  const elementoTarefa = criarElementoTarefa(tarefa);
  ulTarefas.append(elementoTarefa);
});

document.addEventListener("FocoFinalizado", () => {
  if (tarefaSelecionada && liTarefaSelecionada) {
    liTarefaSelecionada.classList.remove("app__section-task-list-item-active");
    liTarefaSelecionada.classList.add("app__section-task-list-item-complete");
    liTarefaSelecionada
      .querySelector("button")
      .setAttribute("disabled", "disabled");
    tarefaSelecionada.completa = true;
    atualizarTarefas();
  }
});

const removerTarefas = (somenteCompletas) => {
  let seletor = ".app__section-task-list-item";
  if (somenteCompletas) {
    seletor = ".app__section-task-list-item-complete";
  }
  const selecionadaFoiRemovida = somenteCompletas
    ? tarefaSelecionada && tarefaSelecionada.completa
    : tarefaSelecionada !== null;
  if (selecionadaFoiRemovida) {
    paragrafoDescricaoTarefa.textContent = "";
    tarefaSelecionada = null;
    liTarefaSelecionada = null;
  }
  document.querySelectorAll(seletor).forEach((elemento) => {
    elemento.remove();
  });
  tarefas = somenteCompletas
    ? tarefas.filter((tarefa) => !tarefa.completa)
    : [];
  atualizarTarefas();
};
