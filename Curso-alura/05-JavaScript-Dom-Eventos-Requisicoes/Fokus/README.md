# Fokus

Aplicação de produtividade baseada na técnica **Pomodoro**, com temporizador de foco e pausas, música ambiente e uma lista de tarefas integrada a uma API REST. Desenvolvida com JavaScript puro, explorando manipulação do DOM, eventos e requisições assíncronas.

## Tecnologias utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)

## Sobre o projeto

### Funcionalidades

**Temporizador**
- Três modos: **Foco** (25 min), **Descanso curto** (5 min) e **Descanso longo** (15 min)
- Troca dinâmica de tema, imagem e título de acordo com o modo selecionado
- Botão de iniciar/pausar com alteração de texto e ícone
- Efeitos sonoros ao iniciar, pausar e finalizar o tempo
- Música ambiente em loop, ativada por um botão toggle

**Lista de tarefas (CRUD)**
- Criar, listar, editar e concluir tarefas
- Selecionar uma tarefa como "em andamento"
- Conclusão automática da tarefa selecionada ao final de um ciclo de foco
- Remover apenas as tarefas concluídas ou todas as tarefas

### O que foi praticado

- Manipulação do DOM: `querySelector`, `createElement`, `classList`, `dataset`, `setAttribute`
- **Delegação de eventos** com um único listener de `click` e mapeamento de ações via atributos `data-action`
- **Eventos customizados** (`CustomEvent`) para comunicação entre o temporizador e a lista de tarefas
- Temporização com `setInterval` / `clearInterval` e formatação com `toLocaleTimeString`
- Reprodução de áudio com a API `Audio`
- Requisições HTTP com **Fetch API** e `async/await` (`GET`, `POST`, `PUT` e `DELETE`)
- Execução de requisições em paralelo com `Promise.all`
- Tratamento de erros com `try/catch/finally`
- Temas por contexto com **variáveis CSS** e o atributo `data-contexto` no `<html>`
- Acessibilidade com `aria-hidden` no formulário de tarefas
- Layout responsivo com media queries e CSS reset (Meyer Reset via CDN)

## Estrutura de pastas

```
Fokus/
├── image/          # Logo, imagens de cada modo e ícones da interface
├── sons/           # Música ambiente e efeitos sonoros (play, pause, beep)
├── db.json         # Base de dados das tarefas consumida pela API
├── index.html      # Estrutura da aplicação
├── script.js       # Temporizador, troca de contexto, áudio e delegação de eventos
├── script-api.js   # Funções de comunicação com a API (Fetch)
├── script-crud.js  # Lógica e renderização da lista de tarefas
└── styles.css      # Estilos, temas por contexto e responsividade
```

## Como executar

A lista de tarefas consome uma API REST em `http://localhost:4242/tarefas`, a partir do arquivo `db.json`. Uma forma de subir essa API localmente é com o [json-server](https://github.com/typicode/json-server):

```bash
npx json-server db.json --port 4242
```

Em seguida, abra o arquivo `index.html` no navegador.

---

Projeto desenvolvido durante a formação Front-end da **Alura**.
