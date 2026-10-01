const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textarea = document.querySelector(".app__form-textarea");
const ulTarefas = document.querySelector(".app__section-task-list");
const paragrafoDescricaoTarefa = document.querySelector(
  ".app__section-active-task-description",
);
const botaoAdicionarTarefa = document.querySelector(".app__button--add-task");

let tarefas = [];
let tarefaSelecionadaId = null;

async function carregarTarefas() {
  botaoAdicionarTarefa.setAttribute("disabled", "disabled");
  try {
    tarefas = await obterTarefas();
    renderizarTarefas();
  } finally {
    botaoAdicionarTarefa.removeAttribute("disabled");
  }
}

function fecharFormularioTarefa() {
  formAdicionarTarefa.classList.add("hidden");
  formAdicionarTarefa.setAttribute("aria-hidden", "true");
}

function obterTarefaEli(alvo) {
  const li = alvo.closest(".app__section-task-list-item");
  const id = li.dataset.id;
  const tarefa = tarefas.find((tarefa) => String(tarefa.id) === id);
  return { li, tarefa };
}

async function concluirTarefa(tarefa) {
  if (tarefa.completa) {
    return;
  }
  tarefa.completa = true;
  await atualizarTarefa(tarefa.id, tarefa);
  if (tarefaSelecionadaId === tarefa.id) {
    tarefaSelecionadaId = null;
  }
  await carregarTarefas();
}

async function editarTarefa(tarefa) {
  const novaDescricao = prompt("Qual é o novo nome da tarefa?");
  if (novaDescricao) {
    tarefa.descricao = novaDescricao;
    await atualizarTarefa(tarefa.id, tarefa);
    await carregarTarefas();
  }
}

function selecionarTarefa(tarefa) {
  if (tarefaSelecionadaId === tarefa.id) {
    tarefaSelecionadaId = null;
  } else {
    tarefaSelecionadaId = tarefa.id;
  }
  renderizarTarefas();
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
    if (tarefa.id === tarefaSelecionadaId) {
      li.classList.add("app__section-task-list-item-active");
    }
  }

  return li;
}

function renderizarTarefas() {
  ulTarefas.innerHTML = "";
  tarefas.forEach((tarefa) => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);
  });

  const tarefaSelecionada = tarefas.find((tarefa) => tarefa.id === tarefaSelecionadaId);
  paragrafoDescricaoTarefa.textContent = tarefaSelecionada
    ? tarefaSelecionada.descricao
    : "";
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
    const { tarefa } = obterTarefaEli(alvo);
    concluirTarefa(tarefa);
  },
  "editar-tarefa": (evento, alvo) => {
    const { tarefa } = obterTarefaEli(alvo);
    editarTarefa(tarefa);
  },
  "selecionar-tarefa": (evento, alvo) => {
    const { tarefa } = obterTarefaEli(alvo);
    selecionarTarefa(tarefa);
  },
});

formAdicionarTarefa.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  await criarTarefa(textarea.value);
  await carregarTarefas();
  textarea.value = "";
  fecharFormularioTarefa();
});

document.addEventListener("FocoFinalizado", async () => {
  const tarefaSelecionada = tarefas.find((tarefa) => tarefa.id === tarefaSelecionadaId);
  if (tarefaSelecionada) {
    await concluirTarefa(tarefaSelecionada);
  }
});

const removerTarefas = async (somenteCompletas) => {
  const tarefasParaRemover = somenteCompletas
    ? tarefas.filter((tarefa) => tarefa.completa)
    : tarefas;

  const selecionadaFoiRemovida = tarefasParaRemover.some(
    (tarefa) => tarefa.id === tarefaSelecionadaId,
  );
  if (selecionadaFoiRemovida) {
    tarefaSelecionadaId = null;
  }

  await Promise.all(tarefasParaRemover.map((tarefa) => excluirTarefa(tarefa.id)));
  await carregarTarefas();
};

carregarTarefas();
