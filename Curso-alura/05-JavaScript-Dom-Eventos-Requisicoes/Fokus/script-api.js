const API_URL = "http://localhost:4242/tarefas";

async function obterTarefas() {
  try {
    const resposta = await fetch(API_URL);
    return resposta.json();
  } catch (erro) {
    alert("Ops! Não foi possível carregar as tarefas.");
    return [];
  }
}

async function criarTarefa(descricao) {
  const resposta = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      descricao,
      completa: false,
    }),
  });

  return resposta.json();
}

async function atualizarTarefa(id, dados) {
  const resposta = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  return resposta.json();
}

async function excluirTarefa(id) {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
